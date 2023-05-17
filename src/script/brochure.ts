import * as fs from 'fs';
import { S3 } from 'aws-sdk';

const main = async () => {
  const s3 = new S3();
  await s3
    .upload({
      Body: fs.createReadStream('./src/script/brochure.png'),
      Bucket: 'mirfak-prod',
      Key: 'brochure.png',
      ACL: 'public-read',
    })
    .promise();
};

main()
  .then(() => {
    console.log('finish!');
  })
  .catch((err) => {
    console.log(err);
  });
