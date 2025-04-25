import { EmailService, EmailValidator, User } from "./EmailService.js";
const user = new User('John Doe', 'john@example.com', Math.floor(Math.random() * 101));
const emailService = new EmailService();
const emailValidator = new EmailValidator();
emailValidator.validateUser(user);
emailService.sendEmail(user, 'unreadMessages');
