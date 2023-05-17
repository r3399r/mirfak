import { Client, PostbackEvent } from '@line/bot-sdk';
import { inject, injectable } from 'inversify';

/**
 * Service class for chat
 */
@injectable()
export class ChatService {
  @inject(Client)
  private readonly client!: Client;

  private async sendBrochure(replyToken: string) {
    await this.client.replyMessage(replyToken, {
      type: 'image',
      originalContentUrl: '',
      previewImageUrl: '',
    });
  }

  private async sendGameResult(replyToken: string, answer: string) {
    switch (answer) {
      case 'wrong':
        await this.client.replyMessage(replyToken, {
          type: 'text',
          text: '不對喔~ 再想想',
        });
        break;
      case '1':
        await this.client.replyMessage(replyToken, [
          {
            type: 'text',
            text: '總共 8 題!讓我們完成所有的題目吧!',
          },
          {
            type: 'template',
            altText: '是非題小遊戲',
            template: {
              type: 'confirm',
              text: '1.星兒的智商都很低嗎?',
              actions: [
                {
                  type: 'postback',
                  data: 'game::wrong',
                  label: '✓',
                  displayText: '✓',
                },
                {
                  type: 'postback',
                  data: 'game::2',
                  label: '✗',
                  displayText: '✗',
                },
              ],
            },
          },
        ]);
        break;
      case '2':
        await this.client.replyMessage(replyToken, [
          {
            type: 'text',
            text: '答對了!下一題~',
          },
          {
            type: 'template',
            altText: '是非題小遊戲',
            template: {
              type: 'confirm',
              text: '2.星兒是不是都不太愛講話?',
              actions: [
                {
                  type: 'postback',
                  data: 'game::wrong',
                  label: '✓',
                  displayText: '✓',
                },
                {
                  type: 'postback',
                  data: 'game::3',
                  label: '✗',
                  displayText: '✗',
                },
              ],
            },
          },
        ]);
        break;
      case '3':
        await this.client.replyMessage(replyToken, [
          {
            type: 'text',
            text: '答對了!下一題~',
          },
          {
            type: 'template',
            altText: '是非題小遊戲',
            template: {
              type: 'confirm',
              text: '3.男性星兒的人數是不是大於女性星兒?',
              actions: [
                {
                  type: 'postback',
                  data: 'game::4',
                  label: '✓',
                  displayText: '✓',
                },
                {
                  type: 'postback',
                  data: 'game::wrong',
                  label: '✗',
                  displayText: '✗',
                },
              ],
            },
          },
        ]);
        break;
      case '4':
        await this.client.replyMessage(replyToken, [
          {
            type: 'text',
            text: '答對了!下一題~',
          },
          {
            type: 'template',
            altText: '是非題小遊戲',
            template: {
              type: 'confirm',
              text: '4.星兒都不喜歡交朋友嗎?',
              actions: [
                {
                  type: 'postback',
                  data: 'game::wrong',
                  label: '✓',
                  displayText: '✓',
                },
                {
                  type: 'postback',
                  data: 'game::5',
                  label: '✗',
                  displayText: '✗',
                },
              ],
            },
          },
        ]);
        break;
      case '5':
        await this.client.replyMessage(replyToken, [
          {
            type: 'text',
            text: '答對了!下一題~',
          },
          {
            type: 'template',
            altText: '是非題小遊戲',
            template: {
              type: 'confirm',
              text: '5.星兒症狀是不是都很明顯?',
              actions: [
                {
                  type: 'postback',
                  data: 'game::wrong',
                  label: '✓',
                  displayText: '✓',
                },
                {
                  type: 'postback',
                  data: 'game::6',
                  label: '✗',
                  displayText: '✗',
                },
              ],
            },
          },
        ]);
        break;
      case '6':
        await this.client.replyMessage(replyToken, [
          {
            type: 'text',
            text: '答對了!下一題~',
          },
          {
            type: 'template',
            altText: '是非題小遊戲',
            template: {
              type: 'confirm',
              text: '6.根據統計世界上約有1%的人是星兒?',
              actions: [
                {
                  type: 'postback',
                  data: 'game::7',
                  label: '✓',
                  displayText: '✓',
                },
                {
                  type: 'postback',
                  data: 'game::wrong',
                  label: '✗',
                  displayText: '✗',
                },
              ],
            },
          },
        ]);
        break;
      case '7':
        await this.client.replyMessage(replyToken, [
          {
            type: 'text',
            text: '答對了!下一題~',
          },
          {
            type: 'template',
            altText: '是非題小遊戲',
            template: {
              type: 'confirm',
              text: '7.星兒是不是都在家自學?',
              actions: [
                {
                  type: 'postback',
                  data: 'game::wrong',
                  label: '✓',
                  displayText: '✓',
                },
                {
                  type: 'postback',
                  data: 'game::8',
                  label: '✗',
                  displayText: '✗',
                },
              ],
            },
          },
        ]);
        break;
      case '8':
        await this.client.replyMessage(replyToken, [
          {
            type: 'text',
            text: '答對了!下一題~',
          },
          {
            type: 'template',
            altText: '是非題小遊戲',
            template: {
              type: 'confirm',
              text: '8.每個星兒的自閉症症狀是不是都不同?',
              actions: [
                {
                  type: 'postback',
                  data: 'game::end',
                  label: '✓',
                  displayText: '✓',
                },
                {
                  type: 'postback',
                  data: 'game::wrong',
                  label: '✗',
                  displayText: '✗',
                },
              ],
            },
          },
        ]);
        break;
      case 'end':
        await this.client.replyMessage(replyToken, {
          type: 'text',
          text: '恭喜您完成所有的題目，您對星兒已經有初步的瞭解囉!',
        });
        break;
      default:
    }
  }

  public async receiveMessage(event: PostbackEvent) {
    if (event.postback.data === 'brochure')
      await this.sendBrochure(event.replyToken);
    else if (event.postback.data.startsWith('game::'))
      await this.sendGameResult(
        event.replyToken,
        event.postback.data.split('::')[1]
      );
  }
}
