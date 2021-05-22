const Information = require('../models/information'); // Import Information Model Schema
const { nanoid } = require('nanoid')
const Id = require('../models/id')

// const globalconnetion = require('../serverconnetion/connections');
module.exports = (router) => {


    router.get('/getAllInformations', (req, res) => {

        // Search database for all blog posts
        Information.find({ deleted: false }, {_id: 1, id: 1, name: 1,number: 1,email: 1, status: 1 }, (err, Information) => {
            // Check if error was found or not
            if (err) {
                res.json({ success: false, message: err }); // Return error message
            } else {
                // Check if blogs were found in database
                if (!Information) {
                    res.json({ success: false, message: 'No Information found.' }); // Return error of no blogs found
                } else {
                    // globalconnetion.emitter('get_Information')

                    res.json({ success: true, information: Information }); // Return success and blogs array
                }
            }
        }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
    });


    // router.post('/addInformation', (req, res) => {

    //     console.log('addInformation route');
    //     console.log(req.body);
    // });


    router.post('/addInformations', (req, res) => {


        console.log(req.body);

        if (!req.body) {
            res.json({ success: false, message: 'You must provide an information' })
        } else {

            Information.aggregate([
                {
                    $project: {
                        "_id": 1,
                        "name": "$name",
                        "email": "$email",
                        "number": "$number",
                        "deleted": "$deleted",
                        "status": "$status",

                    }
                },
                {
                    $match: { information: req.body, deleted: false, status: 'active' }
                },
            ], (err, response) => {


                if(response){
                    res.json({ success: false, message: 'Information name already exists ', err: err.message })

                }else{

                    Id.generate('information', async (uniqueID) => {

                        if (uniqueID) {
                            let information = {
                                name: req.body.name,
                                status: "active",
                                deleted: false,
                                id: uniqueID.id,
                            }
                            Information.create(information, (err, data) => {
                                if (err) {
                                    if (err.code === 11000) {
    
                                        res.json({ success: false, message: 'Information name already exists ', err: err.message })
                                    } else {
    
                                        res.json({ success: false, message: 'Could not save Information Error : ' })
    
                                    }
                                } else {
                                    res.json({ success: true, message: 'Information Registered successfully', rooms: { information: data.information } });
                                    // globalconnetion.emitter('Information')
                                }
                            })
    
                        } else {
                            console.info('generate main id query failed');
                        }
    
                    })


                }
             

            });

        }

    });


    router.put('/changeStatuses', (req, res) => {



        let data = req.body


        if (data.status === 'active') {

            Information.updateOne({
                _id: data._id
            },
                {
                    $set: { status: 'inactive' }

                }, (err, Information) => {
                    if (err) {
                        res.json({ success: false, message: 'Could not Deactivate Information' + err })
                    } else {
                        res.json({ success: true, message: data.Informationname + ' successfully Deactivated', data: Information });
                        // globalconnetion.emitter('Information_stats')
                    }
                })

        } else {

            Information.updateOne({
                _id: data._id
            },
                {
                    $set: { status: 'active' }

                }, (err, Information) => {
                    if (err) {
                        res.json({ success: false, message: 'Could not Activate Information' + err })
                    } else {
                        res.json({ success: true, message: data.Informationname + ' successfully Activate', data: Information });
                        // globalconnetion.emitter('Information')
                    }
                })
        }

    });



    router.put('/deleteInformations', (req, res) => {

        let data = req.body

        // Information.deleteOne({
        //     _id: data._id
        // }, (err, Information) => {
        //     if (err) {
        //         res.json({ success: false, message: 'Could not Delete Information' + err })
        //     } else {
        //         res.json({ success: true, message: data.Informationname + ' Successfully Deleted the Information', data: Information });
        //         // globalconnetion.emitter('Information')
        //     }
        // })

        Information.updateOne({
            _id: data._id
        },
            {
                $set: { status: 'inactive' ,deleted : true }

            }, (err, information) => {
                if (err) {
                    res.json({ success: false, message: 'Could not Deactivate Information' + err })
                } else {
                    res.json({ success: true, message: data.information + ' successfully Deleted Information', information: information });
                    // globalconnetion.emitter('user_stats')
                }
            })


    });




    router.put('/updateInformations', (req, res) => {



        let InformationData = {};
        let data = req.body
        //InformationData.information = parseInt(data.information);
        // InformationData.information = '311';

        Information.findOneAndUpdate({ _id: data._id }, InformationData, { upsert: true }, (err, response) => {
            if (err) return res.json({ success: false, message: err.message });
            if (response) {
                res.json({ success: true, message: "Information Information has been updated!", information: response });
            } else {
                res.json({ success: false, message: "No Information has been modified!", information: response });
            }
        });


        // if (typeof Information.information === 'string') {
        //     res.json({ success: false, message: "Informations should be Number", information: response });
        // } else if (typeof Information.information === 'number') {
        //     Information.findOneAndUpdate({ _id: data._id }, InformationData, { upsert: true }, (err, response) => {
        //         if (err) return res.json({ success: false, message: err.message });
        //         if (response) {
        //             res.json({ success: true, message: "Information Information has been updated!", information: response });
        //         } else {
        //             res.json({ success: false, message: "No Information has been modified!", information: response });
        //         }
        //     });
        // }


    });



    router.put('/changeInformationStatuses', (req, res) => {

        let data = req.body

        console.log(data);


        if (data.status === 'active') {
            Information.updateOne({
                _id: data._id
            },
                {
                    $set: { status: 'inactive' }

                }, (err, information) => {
                    if (err) {
                        res.json({ success: false, message: 'Could not Deactivate Information' + err })
                    } else {
                        res.json({ success: true, message: data.information + ' successfully Deactivated Information', information: information });
                        // globalconnetion.emitter('user_stats')
                    }
                })

        } else {
            Information.updateOne({
                _id: data._id
            },
                {
                    $set: { status: 'active' }

                }, (err, information) => {
                    if (err) {
                        res.json({ success: false, message: 'Could not Activate Information' + err })
                    } else {
                        res.json({ success: true, message: data.information + ' successfully Activate Information ', information: information });
                        // globalconnetion.emitter('user')
                    }
                })
        }

    });









    return router;
};


