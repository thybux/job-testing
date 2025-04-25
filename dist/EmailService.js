export class EmailService {
    sendEmail(user, template) {
        let message = '';
        if (template === 'welcome') {
            message = this.sendWelcomeEmail(user);
        }
        else if (template === 'newDevice') {
            message = this.sendnewDeviceEmail(user);
        }
        else if (template === 'unreadMessages') {
            message = this.sendUnreadMessagesEmail(user);
        }
        this.send(user, message);
    }
    sendWelcomeEmail(user) {
        const message = `Bienvenue ${user.name} 🐼, Votre compte a bien été crée sur PandaLab Pro`;
        return message;
    }
    sendnewDeviceEmail(user) {
        const message = `Bonjour ${user.name} 🐼, Un nouvel appareil vient de se connecter à votre compte`;
        return message;
    }
    sendUnreadMessagesEmail(user) {
        const unreadMessagesCount = user.unreadMessages || 0;
        const message = `Bonjour ${user.name} 🐼, vous avez ${unreadMessagesCount} messages non lus.`;
        return message;
    }
    send(user, message) {
        console.log(`Sending email to ${user.email}: ${message}`);
    }
}
export class User {
    name;
    email;
    unreadMessages;
    constructor(name, email, unreadMessages) {
        this.name = name;
        this.email = email;
        this.unreadMessages = unreadMessages;
    }
    markMessagesAsRead() {
        this.unreadMessages = 0;
    }
}
export class EmailValidator {
    validateEmail(user) {
        if (!user.email.includes('@')) {
            throw new Error('Invalid email address');
        }
    }
    validateUser(user) {
        this.validateEmail(user);
    }
}
