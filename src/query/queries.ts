export const getQueryLocation:string = 
  "select * from FarApp_Location.location";
export const getLocationById = 
  "SELECT * FROM location WHERE id = $1";
export const createLocation =
  "INSERT INTO location (name, email) VALUES ($1, $2)";
export const updateLocation =
  "UPDATE users SET name = $1, email = $2 WHERE id = $3";
export const deleteLocation = 
  "DELETE FROM users where id = $1";
