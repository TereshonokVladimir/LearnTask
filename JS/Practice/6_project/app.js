import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {upload} from './upload'

const firebaseConfig = {
    apiKey: "AIzaSyBF38hekJ5xsLAprPmx-hSQ6CfKKy-X3wE",
    authDomain: "fe-upload-75e89.firebaseapp.com",
    projectId: "fe-upload-75e89",
    storageBucket: "fe-upload-75e89.appspot.com",
    messagingSenderId: "367494831197",
    appId: "1:367494831197:web:daf7b85fa0d6005c5501b4"
}
  
const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp)


upload('#file', {
    multi: true,
    accept: ['.png','.doc','.pdf','.docx'],
    onUpload(files, blocks) {
                files.forEach((file, index) => {
                    const storageRef = ref(storage, `files  ${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed() + '%'
                    const block = blocks[index].querySelector('.preview-info-progress')
                    block.textContent = progress
                    block.style.width = progress 
                }, 
                (error) => console.log(error), 

                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    });
                }
            );
        });  
    }
})

