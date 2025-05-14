# PandaLab - Test

## Contexte

PandaLab envoie de nombreux emails automatisés à ses utilisateurs. Le code a été développé il y a quelques années et a évolué au fil du temps. Cependant, il contient des mauvaises pratiques et est difficile à comprendre, surtout lorsqu'il s'agit de l'étendre ou de le faire évoluer.
## Procedure

L'objectif de cet exercice est de refactoriser le code en vous appuyant sur les principes de la programmation orientée objet (POO). L'idée est d'évaluer votre logique et la manière dont vous êtes capable de refactoriser un code peu clair et difficile à maintenir.

Le temps indicatif pour résoudre l'exercice est d'environ 2 heures, mais il est possible que vous le résolviez plus rapidement ou plus lentement. Prenez le temps qui vous semble nécessaire pour accomplir la tâche.
### Clone the repo

- Clonez ce projet sur votre machine.
- Modifiez les sources du projet selon vos besoins.
- Une fois les modifications effectuées, poussez votre code sur un dépôt GitHub privé.
- Créez une demande de fusion (merge request) avec vos modifications.
- Donnez des droits d'accès à PandaLabDelivery afin qu'il puisse réviser votre code.
- Dans la demande de fusion, indiquez vos axes de réflexion principaux.
- Précisez également ce que vous auriez fait si vous aviez eu plus de temps.


### Modification

- le return de chaque fonction de message
- convention de nommage de sendnewDeviceEmail -> sendNewDeviceEmail
- ajout d'une interface IUser et de l'enum de EmailTemplate 
- ajout d'une map pour dans le cas d'un ajout de template + flexible
- ajout (porté des méthode private public etc ...)
- ajout d'une méthode pour enregistrer une nouvelle template ( + flexible)

