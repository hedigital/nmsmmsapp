import {useEffect, useRef, useState} from 'react';
import {instance as axios} from '../navigation/RootStackNavigator';

const useUploadImage = (uri, name, errorCallback) => {
  const [url, setURL] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const cbRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    setURL('');
  }, [uri]);

  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  useEffect(() => {
    cbRef.current = errorCallback;
  }, [errorCallback]);

  useEffect(() => {
    async function uploadImage() {
      try {
        if (uri && nameRef.current) {
          setIsFetching(true);
          const {
            data: {imageURL: url},
          } = await axios.post('/images/createFromBuffer', {
            uri,
            name: nameRef.current,
          });
          if (url) {
            setURL(url);
          }
        }
      } catch (error) {
        cbRef.current(error);
      } finally {
        setIsFetching(false);
      }
    }
    uploadImage();
  }, [uri]);

  return [url, isFetching];
};

export default useUploadImage;
