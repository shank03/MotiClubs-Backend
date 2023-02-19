const express = require("express");
const controller = require("../controllers/SuperAdminController");
const auth = require("../middlewares/auth");
const router = express.Router();

// Return 200 if logged in user is super admin, else 401
router.get("/login", auth.superAdmin, controller.login);

// Get list of all clubs
router.get("/get_club", auth.superAdmin, controller.getClubs);

// Add a club
router.post("/add_club", auth.superAdmin, controller.saveClub);

router.delete("/delete_club", auth.superAdmin, controller.deleteClub);

// Assign admin role to user with email {req.body.email}
router.post("/add_admin", auth.superAdmin, controller.assignAdmin);

// Unassign admin role to user with userId {req.body.userid}
router.post("/remove_admin", auth.superAdmin, controller.unassignAdmin);

module.exports = router;
