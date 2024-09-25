


/** POST: http://localhost:8080/api/register
 * @param :{
 * "username" : "example123",
 * "password" : "admin123",
 * "email" "example@gmail.com",
 * "firstName" : "Kondwani",
 * "lastName" : "Chindongo",
 * "mobileNumber" : "0712312930",
 * "profile" : ""   
 * }
 */
export async function register(req,res) {
  res.json('register route');  
}

/** POST: http://localhost:8080/api/login
 * @param :{
 * "username" : "example123",
 * "password" : "admin123",
 }
*/

export async function login(req,res) {
    res.json('login route'); 
  }


/**GET: http://localhost:8080/api/user/example123 */
export async function getUser(req,res) {
    res.json('getUser route');
  }

export async function updateUser(req,res) {
    res.json('updateUser route');
  }