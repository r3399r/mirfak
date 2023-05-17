import * as fs from 'fs';
import { Client, RichMenu, RichMenuResponse } from '@line/bot-sdk';
import { SSM } from 'aws-sdk';

const main = async () => {
  const envr = 'prod';

  const ssm = new SSM({ region: 'ap-southeast-1' });
  const parameter = await ssm
    .getParameter({ Name: `mirfak-${envr}-line-token` })
    .promise();

  const client: Client = new Client({
    channelAccessToken: parameter.Parameter?.Value ?? 'xx',
  });

  const richMenuMain: RichMenu = {
    size: {
      width: 945,
      height: 319,
    },
    selected: true,
    name: 'richmenu',
    chatBarText: '選單',
    areas: [
      {
        bounds: {
          x: 0,
          y: 0,
          width: 472,
          height: 159,
        },
        action: {
          type: 'postback',
          data: 'brochure',
          displayText: '電子傳單',
        },
      },
      {
        bounds: {
          x: 0,
          y: 159,
          width: 472,
          height: 160,
        },
        action: {
          type: 'uri',
          // tslint:disable-next-line: no-http-string
          uri: 'http://pic.sopili.net/l/facebook/page/228154233892265',
        },
      },
      {
        bounds: {
          x: 472,
          y: 159,
          width: 472,
          height: 160,
        },
        action: {
          type: 'uri',
          uri: 'https://line.me/S/sticker/4008485/',
        },
      },
      {
        bounds: {
          x: 472,
          y: 0,
          width: 472,
          height: 159,
        },
        action: {
          type: 'postback',
          data: 'game::1',
          displayText: '認識星兒小測驗',
        },
      },
    ],
  };

  const richMenus: RichMenuResponse[] = await client.getRichMenuList();
  console.log(`find existing richMenus: ${richMenus.length}`);
  for (const rm of richMenus) await client.deleteRichMenu(rm.richMenuId);

  console.log('deleted');
  const richMenu: string = await client.createRichMenu(richMenuMain);

  console.log('created new');
  await client.setRichMenuImage(
    richMenu,
    fs.createReadStream('./src/script/richmenu.jpg')
  );

  console.log('set richmenu finish');

  await client.setDefaultRichMenu(richMenu);
  console.log('setDefault');
};

main()
  .then(() => {
    console.log('finish!');
  })
  .catch((err) => {
    console.log(err);
  });
