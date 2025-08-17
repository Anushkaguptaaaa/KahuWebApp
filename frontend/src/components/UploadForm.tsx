import React, { useState, useRef } from 'react';
import axios from 'axios';
import { UploadFormProps, Breed } from '../types/Breed';

const UploadForm: React.FC<UploadFormProps> = ({ onUploadSuccess, onError }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      return 'Please select a valid image file (JPG, JPEG, or PNG)';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 5MB';
    }

    return null;
  };

  const handleFileSelect = (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      onError(validationError);
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!selectedFile) {
      onError('Please select an image file first');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      // Connect to our backend API
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.breeds) {
        onUploadSuccess(response.data.breeds);
      } else {
        // If no breeds were detected
        onUploadSuccess([]);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      
      // For development/demo purposes, use mock data if backend is not available
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log('Using mock data for development');
        const mockBreeds: Breed[] = [
          {
            id: 'beng',
            name: 'Bengal',
            origin: 'United States',
            description: 'Bengals are a lot of fun to live with, but they\'re definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn\'t provide it.',
            temperament: 'Alert, Agile, Energetic, Demanding, Intelligent',
            life_span: '12 - 15 years',
            weight: {
              imperial: '6 - 12',
              metric: '3 - 5'
            }
          }
        ];
        
        setTimeout(() => {
          onUploadSuccess(mockBreeds);
          setLoading(false);
        }, 2000);
        return;
      }
      
      onError('Failed to upload image. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="upload-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="upload-form">
              <h2 className="mb-4">Upload Your Cat's Photo</h2>
              <p className="text-muted mb-4">
                Upload a clear photo of your cat to discover its breed and learn more about its characteristics.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div 
                  className={`file-drop-area ${dragActive ? 'active' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  style={{
                    border: '2px dashed #ccc',
                    borderRadius: '10px',
                    padding: '40px',
                    textAlign: 'center' as const,
                    cursor: 'pointer',
                    backgroundColor: dragActive ? '#f8f9fa' : 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  
                  {previewUrl ? (
                    <div className="image-preview">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        style={{ maxWidth: '300px', maxHeight: '300px' }}
                      />
                      <p className="mt-2 text-muted">
                        Click to change image or drag a new one here
                      </p>
                    </div>
                  ) : (
                    <div>
                      <i className="fa fa-cloud-upload fa-3x text-muted mb-3"></i>
                      <p className="mb-2">
                        <strong>Click to upload</strong> or drag and drop
                      </p>
                      <p className="text-muted small">
                        JPG, JPEG or PNG (Max 5MB)
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <button 
                    type="submit" 
                    className="upload-button btn btn-primary btn-lg"
                    disabled={!selectedFile || loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Analyzing...
                      </>
                    ) : (
                      'Identify Breed'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;

