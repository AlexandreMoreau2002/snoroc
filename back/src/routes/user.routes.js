// Importation du module express pour créer des applications web avec Node.js
const express = require("express");

// Création d'un nouveau routeur pour gérer les routes liées aux utilisateurs
const router = express.Router();

// Importation des contrôleurs pour les utilisateurs. Ces fonctions contrôlent la logique de traitement des requêtes HTTP pour les différentes routes.
const {
  Login,
  SignUp,
  Update,
  Delete,
  GetById,
  GetProfile,
  ForgotPassword,
  ResetPassword,
  VerifyEmail,
  UpdateNewsletter,
  UpdatePassword,
} = require("../controllers/user.controller");

// // Route pour l'inscription d'un nouvel utilisateur. Utilise la méthode HTTP POST.
router.post("/signup", SignUp); // Permet à un utilisateur de s'inscrire

// // Route pour la connexion d'un utilisateur. Utilise la méthode HTTP POST.
router.post("/login", Login); // Permet à un utilisateur de se connecter

// // Route pour la mise à jour du profil utilisateur. Utilise la méthode HTTP PATCH.
router.patch("/update", Update); // Permet à un utilisateur de mettre à jour son profil
//
// // Route pour la suppression d'un compte utilisateur. Utilise la méthode HTTP DELETE.
// router.delete("/delete", Delete); // Permet à un utilisateur de supprimer son compte
//
// // Route pour obtenir les détails d'un utilisateur par son ID. Utilise la méthode HTTP GET.
// router.get("/:id", GetById); // Récupère un utilisateur spécifique par son ID
//
// // Route pour obtenir le profil de l'utilisateur actuellement connecté. Utilise la méthode HTTP GET.
// router.get("/profile", GetProfile); // Récupère le profil de l'utilisateur connecté
//
// // Route pour la demande de réinitialisation du mot de passe. Utilise la méthode HTTP POST.
// router.post("/forgot-password", ForgotPassword); // Envoie une demande de réinitialisation de mot de passe
//
// // Route pour la réinitialisation du mot de passe. Utilise la méthode HTTP POST.
// router.post("/reset-password", ResetPassword); // Permet de réinitialiser le mot de passe
//
// // Route pour la vérification de l'email. Utilise la méthode HTTP GET.
router.post("/verify-email", VerifyEmail); // Permet de vérifier l'adresse email de l'utilisateur
//
// // Route pour la mise à jour de l'abonnement à la newsletter. Utilise la méthode HTTP PATCH.
// router.patch("/update-newsletter", UpdateNewsletter); // Met à jour l'abonnement à la newsletter
//
// // Route pour la mise à jour du mot de passe. Utilise la méthode HTTP PATCH.
// router.patch("/update-password", UpdatePassword); // Met à jour le mot de passe de l'utilisateur
//
// // Exportation du routeur configuré pour être utilisé dans d'autres parties de l'application
module.exports = router;

// Routes de test pour vérifier rapidement le fonctionnement de l'API
router.get("/test", () => console.log("hello")); // Affiche un message dans la console du serveur
router.get("/alors", (req, res) => res.send("Alors évidemment, me revoilà")); // Renvoie une réponse HTTP avec un texte
