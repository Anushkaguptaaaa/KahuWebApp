import { showLoader, hideLoader } from './loader.js';

function compressImageForStorage(dataUrl, maxSize = 1200) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let w = img.width;
      let h = img.height;
      if (w > maxSize || h > maxSize) {
        if (w > h) {
          h = Math.round((h * maxSize) / w);
          w = maxSize;
        } else {
          w = Math.round((w * maxSize) / h);
          h = maxSize;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

export function initUpload(navigate) {
  const uploadLink = document.getElementById('upload-link');
  const uploadInput = document.getElementById('upload-input');

  if (!uploadLink || !uploadInput) return;

  uploadLink.onclick = (e) => {
    e.preventDefault();
    uploadInput.click();
  };

  uploadInput.onchange = async function () {
    const file = this.files[0];
    if (!file) return;

    const statusEl = document.getElementById('upload-status');
    uploadLink.classList.add('upload-link-disabled');
    statusEl.innerHTML = '';
    showLoader();

    let imageDataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    imageDataUrl = await compressImageForStorage(imageDataUrl);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Upload failed');
      }

      sessionStorage.setItem(
        'kahuUploadResult',
        JSON.stringify({
          imageDataUrl,
          breeds: data.breeds || [],
          message: data.message,
        })
      );

      navigate('/results');
    } catch (error) {
      hideLoader();
      uploadLink.classList.remove('upload-link-disabled');
      statusEl.innerHTML =
        '<span style="color:#ffcccc;margin-top:12px;display:block;font-size:14px;">' +
        (error.message || 'Something went wrong. Please try again.') +
        '</span>';
    }

    this.value = '';
  };
}
