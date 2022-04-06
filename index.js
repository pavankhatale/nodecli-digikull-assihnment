const readline = require('readline')
const { stdin: input, stdout: output } = require('process');
const { userInfo } = require('os');
const rl = readline.createInterface({ input, output });


const createUser= (usr) => {
  rl.question("please Enter your Name: \n", (a1) => {
    rl.question("Please Enter your Adhar number : \n", (a2) => {
      rl.question("Please Enter Bank Operation(credit or debit):\n", (a3) => {
        
        rl.question("Please Enter Amount: \n", (a4) => {
          let info = [[a1, a2, a3, a4]];

          console.table(info);
          
          console.log("operation successful,thanks for visiting abc bank");
rl.close()
          //strore all user data in another file
          //fs.writefilesync("userdata.txt,info")

        });
      });
    });
  })
};



const userData = [
    {
        name: "pavan",
        contact_deatails: 747971577,
        adhar_number:512564215456,
        amount:1000
    },
     {
        name: "rahul",
        contact_deatails: 747971577,
        adhar_number:512564215456,
        amount:1000
    },
  
]

const Bank_option = ["Withdrawal", "New account"];

const userInfos = (user) => {
    rl.question('please provide Username \n ', username => {
        user(username)
    })
}

const debit=(userdetails)=>{
    rl.question("please write amount to Debit  \n", (deb) => {
          
        // const x=Number(deb)
        if (deb > userdetails[0].amount) {
            console.log("\n not sufficient balance!! \n")
            debit(userdetails)

        }
        else
        {userdetails[0].amount=userdetails[0].amount -deb;
            
     
            console.table(userdetails)
            console.log("\n Thank for visiting abc Bank \n ")
            rl.close()
        }

    })
}

const credit=(userdetails)=>{
    rl.question("enter amount to be credited \n",(amt)=>
    {
        userdetails[0].amount=userdetails[0].amount + Number(amt);
        
        console.table(userdetails)
        
        console.log("Thank for visiting abc Bank \n")
        rl.close()
    })
    
}

const debcred = (userdetails) => {
    (() => {
        console.table(userdetails)
        rl.question("do you want to Debit/Credit amount y/n \n",
            answer => {
                if (answer == 'y') {
                    rl.question("1 for Debit , 2 for credit \n", answer => {
                        if (answer == 1) {
                            debit(userdetails)
                            
                        }
                        else if (answer == 2) {
                            credit(userdetails)
                        }
                        else {
                            console.log("please select correct option !! \n")
                            debcred(userdetails)
                        }
                    })
                }
                else
                    rl.close()
            })
    })()
}



const bankoperation = () => {
    console.table(Bank_option)
    rl.question("WElCOME TO abc bank !!! please Choose from below banking operation \n", (ser) => {
        if (ser == 0) {
            userInfos(user => {
                let i = 0;
                const userdetails = userData.filter(item => {
                    return item.name == user;
                })

                userdetails.length >= 1 ?

                    debcred(userdetails)

                    :
                    (() => {
                        console.log("user not found \n")
                        rl.close();
                    })();


            })


        }
        else if (ser == 1) {
            createUser(usr=>
                {userData.push(usr)
                console.log("\n \n user has been added \n \n ")
                    console.table(userData)
                console.log("thaks for visiting abc bank")
                rl.close()})
                
        } else {
            console.log("please choose correct option \n")
            serviceOpt();
        }

    })

}
    bankoperation()

