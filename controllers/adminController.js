const Assignment = require('../models/Assignment');

// Get assignments for an admin
exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user._id }).populate('userId', 'name');
    res.json(assignments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Accept an assignment
exports.acceptAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment || assignment.admin.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: 'Assignment not found or unauthorized' });
    }
    assignment.status = 'accepted';
    await assignment.save();
    res.json({ message: 'Assignment accepted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Reject an assignment
exports.rejectAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment || assignment.admin.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: 'Assignment not found or unauthorized' });
    }
    assignment.status = 'rejected';
    await assignment.save();
    res.json({ message: 'Assignment rejected' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
