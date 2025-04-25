export class EmailService {
  sendEmail(user: any, template: string) {
    let message = '';
    if (template === 'welcome') {
      message = this.sendWelcomeEmail(user);
    } else if (template === 'newDevice') {
      message = this.sendnewDeviceEmail(user);
    } else if (template === 'unreadMessages') {
      message = this.sendUnreadMessagesEmail(user);
    }
    this.send(user, message);
  }

  sendWelcomeEmail(user: any) {
    const message = `Bienvenue ${user.name} 🐼, Votre compte a bien été crée sur PandaLab Pro`;
    return message;
  }

  sendnewDeviceEmail(user: any) {
    const message = `Bonjour ${user.name} 🐼, Un nouvel appareil vient de se connecter à votre compte`;
    return message;
  }

  sendUnreadMessagesEmail(user: any) {
    const unreadMessagesCount = user.unreadMessages || 0;
    const message = `Bonjour ${user.name} 🐼, vous avez ${unreadMessagesCount} messages non lus.`;
    return message;
  }

  send(user: any, message: string) {
    console.log(`Sending email to ${user.email}: ${message}`);
  }
}

export class User {
  constructor(public name: string, public email: string, public unreadMessages: number) {}

  markMessagesAsRead() {
    this.unreadMessages = 0;
  }
}

export class EmailValidator {
  validateEmail(user: any) {
    if (!user.email.includes('@')) {
      throw new Error('Invalid email address');
    }
  }

  validateUser(user: any) {
    this.validateEmail(user);
  }
}
