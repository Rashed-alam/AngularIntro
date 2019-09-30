const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const MachineCapacityModelSchema = new mongoose.Schema({
    machineName: { type: String, unique: true, required: true },
    machineGauge: { type: Number },
    machineDiameter: { type: Number },
    machineCylinderRpm: { type: Number },
    loopLength: { type: Number },
    feederNumber: { type: Number },
    yarnCount: { type: Number },
    efficiency: { type: Number },
    time: { type: Number },
    knitting: { type: String },
    fabricWeightCapacityPerShift: { type: Number },
    fabricLengthCapacityPerShift: { type: Number }

})

MachineCapacityModelSchema.plugin(AutoIncrement, { inc_field: 'machine_id' });
module.exports = mongoose.model('machine-capacity', MachineCapacityModelSchema);