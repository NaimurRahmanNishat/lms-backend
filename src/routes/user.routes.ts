import express from "express";
import { activateUser, getUserById, loginUser, logoutUser, refreshAccessToken, registerUser, resetPassword, socialAuth, updateProfile, updateProfilePicture } from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";

const router = express.Router();

router.post("/register", registerUser);
router.post("/activate-user", activateUser);

router.post("/login", loginUser);
router.post("/refresh-token", refreshAccessToken);

router.post("/logout", isAuthenticated, logoutUser);
router.get("/me", isAuthenticated, getUserById);
router.post("/social-auth", socialAuth);

router.put("/update-profile", isAuthenticated, updateProfile);
router.put("/reset-password", isAuthenticated, resetPassword);
router.put("/update-profile-picture", isAuthenticated, updateProfilePicture);

export default router;