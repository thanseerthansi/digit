import * as filestack from "filestack-js";
import { Apikey } from "./Baseurl";
import { useState } from "react";

    export default function Filestack(ratio) {
      // console.log("ratioin filestack",ratio)
      return new Promise((resolve) => {
        var client = filestack.init(Apikey);
        const options = {
          fromSources: ["local_file_system", "instagram", "facebook"],
          accept: ["image/*"],
          transformations: {
            crop: {
              aspectRatio: ratio==="landscape"?3/2:ratio==="banner"?14/4:1/1,
              force: true,
            },
          },
          maxFiles: 1,
          minFiles: 1,
          uploadInBackground: false,
          onUploadDone: (res) => {
            if (res.filesUploaded.length !== 0) {
              var newArray = [];
              res.filesUploaded.forEach((element) => {
                newArray.push(element.url);
              });
              // console.log("rl", newArray)
              resolve(newArray[0]);
            }
          },
        };
        client.picker(options).open();
      });
    }

