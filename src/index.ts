import { EmailService, EmailValidator, User } from "./EmailService.js";


// juste pour avoir la cohérence avec le code modifier
const unreadMessage: number = Math.floor(Math.random() * 101)

const user = new User('John Doe', 'john@example.com', unreadMessage);
const emailService = new EmailService();
const emailValidator = new EmailValidator();

emailValidator.validateUser(user);
emailService.sendEmail(user, 'unreadMessages');
