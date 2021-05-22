const Search = require('../models/search'); // Import User Model Schema
const hash = require('../serverconnetion/enrypter')
const Id = require('../models/id')
// const globalconnetion = require('../serverconnetion/connections');

module.exports = (router) => {


    router.get('/getAllCategory', (req, res) => {

        // Search database for all blog posts

        Search.aggregate([
            {
                $match: { deleted: false }
            }
        ], (err, Category) => {
            if (err) return res.json({ success: false, message: err.message });
            if (Category) {
                // lib.createEmit('types');
                //   return cb({ success: true, data: res });
                res.json({ success: true, data: Category });
            } else {
                res.json({ success: false, message: "No Category found!", toaster: 'off' });
            }
        }
        );
    });

    router.get('/findUser/:selector/:input', (req, res) => {



  let selector = req.params.selector;
  let input = req.params.input

        if(selector === 'name'){

            Search.findOne({name:input}, (err, response) => {

    
                if( err ) return cb({ success:false, message:err.message });
                if( response ){
                    res.json({ success: true, scammer: response });
                }else{
                    res.json({ success: false, message: "No Information found!", toaster: 'off' });
                }
            });

        }else if(selector === 'email'){

            Search.findOne({email:input}, (err, response) => {

    
                if( err ) return cb({ success:false, message:err.message });
                if( response ){
                    res.json({ success: true, scammer: response });
                }else{
                    res.json({ success: false, message: "No Information found!", toaster: 'off' });
                }
            });

        }else{

            Search.findOne({number:input}, (err, response) => {

    
                if( err ) return cb({ success:false, message:err.message });
                if( response ){
                    res.json({ success: true, scammer: response });
                }else{
                    res.json({ success: false, message: "No Information found!", toaster: 'off' });
                }
            });
        }
    });




    router.post('/addCategory', (req, res) => {

        if (!req.body.category) {
            res.json({ success: false, message: 'You must provide an category' })
        } else {
            Id.generate('category', async (uniqueID) => {
                if (uniqueID) {
                    let category = new Category({
                        category_name: req.body.category,
                        id: uniqueID.id
                    })
                    category.save((err, data) => {
                        if (err) {
                            if (err.code === 11000) {

                                res.json({ success: false, message: 'Category name already exists ', err: err.message })
                            } else {

                                res.json({ success: false, message: 'Could not save Category Error : ' })
                            }
                        } else {
                            res.json({ success: true, message: 'Category Registered successfully', rooms: { category: data.category } });
                        }
                    })
                } else {
                    console.info('generate main id query failed');
                }
            });
        }

    });


    router.put('/changeStatus', (req, res) => {



        let data = req.body


        if (data.status === 'active') {

            Search.updateOne({
                _id: data._id
            },
                {
                    $set: { status: 'inactive' }

                }, (err, Category) => {
                    if (err) {
                        res.json({ success: false, message: 'Could not Deactivate Category' + err })
                    } else {
                        res.json({ success: true, message: data.Roomname + ' successfully Deactivated', data: Category });
                        // globalconnetion.emitter('Room_stats')
                    }
                })

        } else {

            Search.updateOne({
                _id: data._id
            },
                {
                    $set: { status: 'active' }

                }, (err, Category) => {
                    if (err) {
                        res.json({ success: false, message: 'Could not Activate Category' + err })
                    } else {
                        res.json({ success: true, message: data.Roomname + ' successfully Activate', data: Category });
                        // globalconnetion.emitter('Category')
                    }
                })
        }

    });



    router.put('/deleteCategory', (req, res) => {

        let data = req.body

        Search.deleteOne({
            id: data.id
        }, (err, Category) => {
            if (err) {
                res.json({ success: false, message: 'Could not Delete Category' + err })
            } else {
                res.json({ success: true, message: data.Roomname + ' Successfully Deleted the Category', data: Category });
                // globalconnetion.emitter('Category')
            }
        })


    });




    router.put('/updateCategory', (req, res) => {


        let data = req.body.category

        console.log(data);


        Search.findOneAndUpdate(
            { id: +data.id },
            {
                $set: {
                    category_name: data.category
                }
            },
            { upsert: true },
            (err, datas) => {

                if (datas) {
                    res.json({ success: true, data: datas });
                }
                else {
                    res.json({ success: false, message: 'Could not Update Category' + err })
                }
            }
        )


        // if (typeof Search.category === 'string') {
        //     res.json({ success: false, message: "Rooms should be Number", category: response });
        // } else if (typeof Search.category === 'number') {
        //     Search.findOneAndUpdate({ _id: data._id }, RoomData, { upsert: true }, (err, response) => {
        //         if (err) return res.json({ success: false, message: err.message });
        //         if (response) {
        //             res.json({ success: true, message: "Category Information has been updated!", category: response });
        //         } else {
        //             res.json({ success: false, message: "No Category has been modified!", category: response });
        //         }
        //     });
        // }


    });



    router.put('/changeCategoryStatus', (req, res) => {

        let data = req.body

        console.log(data);


        if (data.status === 'active') {
            Search.updateOne({
                _id: data._id
            },
                {
                    $set: { status: 'inactive' }

                }, (err, category) => {
                    if (err) {
                        res.json({ success: false, message: 'Could not Deactivate Category' + err })
                    } else {
                        res.json({ success: true, message: data.category + ' successfully Deactivated Category', category: category });
                        // globalconnetion.emitter('user_stats')
                    }
                })

        } else {
            Search.updateOne({
                _id: data._id
            },
                {
                    $set: { status: 'active' }

                }, (err, category) => {
                    if (err) {
                        res.json({ success: false, message: 'Could not Activate Category' + err })
                    } else {
                        res.json({ success: true, message: data.category + ' successfully Activate Category ', category: category });
                        // globalconnetion.emitter('user')
                    }
                })
        }

    });







    return router;
};


