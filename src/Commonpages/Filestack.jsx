import * as filestack from "filestack-js";
import { Apikey } from "./Baseurl";
import { useState } from "react";
// const [uploaded_images, setuploaded_images] = useState([]);
export default function Filestack() {
    
    var client = filestack.init(Apikey);
    console.log("entered filestack")
    const options = {
        fromSources: ["local_file_system", "instagram", "facebook"],
        accept: ["image/*"],
        transformations: {
          
          crop: {
            aspectRatio:1/1,
            force: true,
          },
        },
        maxFiles: 1,
        minFiles: 1,
        uploadInBackground:false,
        onUploadDone: (res) => {
          if (res.filesUploaded.length !== 0) {
            var newArray = [];
            res.filesUploaded.forEach((element) => {
              newArray.push(element.url);
            });
            console.log("rl",newArray)
            return newArray[0]
            // setuploaded_images(()=>[...newArray]);
            // return newArray[0]
          }
        },
      };
      client.picker(options).open();
    };

