declare module 'zeptomail' {
  export interface SendMailOptions {
    from: {
      address: string;
      name: string;
    };
    to: Array<{
      email_address: {
        address: string;
        name: string;
      };
    }>;
    subject: string;
    htmlbody: string;
  }

  export interface ZeptoMailConfig {
    url: string;
    token: string;
  }

  export class SendMailClient {
    constructor(config: ZeptoMailConfig);
    sendMail(options: SendMailOptions): Promise<any>;
  }
}
