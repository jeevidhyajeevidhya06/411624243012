from fastapi import APIRouter
router=APIRouter()
@router.get("/users")
def get_data():
    return "Get Data"
@router.post("/users/post")
def post_data(id):
    return "Post Data"+id
@router.put("/users/put")
def put_data(name,age):
    return "Put Data"+name+" "+age
@router.patch("/users/patch")
def patch_data(name):
    return "Patch Data"+name
@router.delete("/users/delete")
def delete_data():
    return "Delete Data"