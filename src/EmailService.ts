// service des email
export class EmailService {

  // ajout de l'email validator avant d'envoyer l'email
  private emailValidator: EmailValidator;

  // une map qui va return la string d'une template
  private handlerTemplate: Map<string, (user: User) => string>

  constructor() {
    this.emailValidator = new EmailValidator();

    this.handlerTemplate = new Map([
        [EmailTemplate.WELCOME, this.sendWelcomeEmail.bind(this)],
        [EmailTemplate.NEW_DEVICE, this.sendNewDeviceEmail.bind(this)],
        [EmailTemplate.UNREAD_MESSAGES, this.sendUnreadMessagesEmail.bind(this)]
    ]);
  }

  sendEmail(user: User, template: string) {
    try{
      // on valide l'email de l'utilisateur avant de tenter d'envoyer le mail
      this.emailValidator.validateUser(user);

      // me return la fonction lié à la template
      let messageHandler = this.handlerTemplate.get(template);
      if (!messageHandler) {
        throw new Error(
          `pas de template disponible ${template}. liste des templates possible => ${Array.from(this.handlerTemplate.keys())}`
        )
      }
      const message = messageHandler(user);
      this.send(user, message);
    } catch (e) {
      // affichage de l'erreur reel pratique pour le debug
      console.error(e);
    }
  }

  regiterNewTemplate(template: string, handler: (user: User) => string) {
    this.handlerTemplate.set(template, handler);
  }

  private sendWelcomeEmail(user: User) {
    return `Bienvenue ${user.name} 🐼, Votre compte a bien été crée sur PandaLab Pro`;
  }

  private sendNewDeviceEmail(user: User) {
    return `Bonjour ${user.name} 🐼, Un nouvel appareil vient de se connecter à votre compte`;
  }

  private sendUnreadMessagesEmail(user: User) {
    const unreadMessagesCount = user.unreadMessages || 0;
    return `Bonjour ${user.name} 🐼, vous avez ${unreadMessagesCount} messages non lus.`;
  }

  private send(user: User, message: string) {
    console.log(`Sending email to ${user.email}: ${message}`);
  }
}

export class User implements IUser{

  constructor(
      public name: string,
      public email: string,
      public unreadMessages: number
  ) {}

  markMessagesAsRead() {
    this.unreadMessages = 0;
  }
}


export class EmailValidator {
  validateEmail(email: string) {
    if (!email.includes('@')) {
      throw new Error('Invalid email address');
    }
    return true;
  }

  validateUser(user: IUser) {
    this.validateEmail(user.email);
  }
}


// ajout d'un enum pour les templates
enum EmailTemplate {
  WELCOME = 'welcome',
  NEW_DEVICE = 'newDevice',
  UNREAD_MESSAGES = 'unreadMessages'
}

// interface IUSER
export interface IUser {
  name: string;
  email: string;
  unreadMessages: number;
}
