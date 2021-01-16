import Aprain from "../components/Images/A1.jpg";
import Cap from "../components/Images/Cap.jpg";
import chefCap from "../components/Images/ChefCap.jpg";
import chefCoat from "../components/Images/ChefCoat.jpg";
import Gloves from "../components/Images/Gloves.jpg";
import Trouser from "../components/Images/Trouser.jpg";
import Bag from "../components/Images/Bag.png";
import tShirt from "../components/Images/Shirt.jpg";
import beardCover from "../components/Images/BeardCover.jpg";
import taat from "../components/Images/Taat.png";
import Mask from "../components/Images/Mask.jpg";
import labCoat from "../components/Images/LabCoat.jpg";

const ProductReducer = () => {
    return(
    [
        {_id:1, Name:'Apron',
                Price:100, 
                Image:Aprain, 
                Color:["Red", "Gray", "White", "Blue", "Brown", "Black"], 
                clothType:["parachute","Cotton"],
                companyLogo:false,
                description:'Used by chefs to wear to prevent stain to their cloths or uniforms.'},

        {_id:2, Name:'Net Hair Cap',
                Price:10,  
                Image:Cap,
                Color:["Red", "White","Black"],
                clothType:null, 
                companyLogo:false,
                description:'Wore to prevent the hair to fall into merchandise and to maintain clealiness of the workplace.'},

        {_id:3, Name:'Chef Cap', 
                Price:20,
                Image:chefCap, 
                Color:["Red", "White","Black"],
                clothType:null, 
                companyLogo:false,
                description:'Wore by chefs as a part of uniform and to prevent chefs hair to fall in ht merchandise.'},

        {_id:4, Name:'Chef Coat', 
                Price:500, 
                Image:chefCoat, 
                Color:["Red", "White","Black"],
                clothType:null,
                companyLogo:false,
                description:'Wore by Chefs as a part of Uniform in working places.'},

        {_id:5, Name:'Taat', 
                Price:10, 
                Image:taat,
                Color:['Brown'],
                clothType:null,
                companyLogo:null,
                description:'Used as an insulator to hold items that are very hot and has high temperature.'},

        {_id:6, Name:'Gloves', 
                Price:10, 
                Image:Gloves,
                Color:['white'],
                clothType:null,
                companyLogo:null,
                description:'Used as an insulator to hold items that are very hot and has high temperature.'},

        {_id:7, Name:'Shopping Bags', 
                Price:13, 
                Image:Bag, 
                Color:["Red", "White","Black"],
                clothType:null,
                companyLogo:false,
                description:'Bags to hold items for shopping etc.'},

        {_id:8, Name:'Trouser', 
                Price:500, 
                Image:Trouser, 
                Color:["Blue","Black"],
                clothType:null,
                companyLogo:false,
                description:'Wore by workers as Uniform curriclumn.'},

        {_id:9, Name:'T-Shirt', 
                Price:100, 
                Image:tShirt,
                Color:["Red", "Gray", "White", "Blue", "Brown", "Black"],
                clothType:null,
                companyLogo:false,
                description:'Wore by workers as Uniform curriclumn.'},

        {_id:10, Name:'Beard cover',
                Price:20, 
                Image:beardCover,
                Color:["Red", "Gray", "White", "Blue", "Brown", "Black"],
                clothType:null,
                companyLogo:false,
                description:'Wore by workers as Uniform curriclumn.'},

        {_id:11, Name:'Mask', 
                 Price:15, 
                 Image:Mask,
                 Color:["Red", "Gray", "White", "Blue", "Brown", "Black"],
                 clothType:null,
                 companyLogo:false,
                 description:'Wore by workers as Uniform curriclumn.'},

        {_id:12, Name:'Lab Coat', 
                Price:700, 
                Image:labCoat,
                Color:["White"],
                clothType:null,
                companyLogo:false,
                description:'Wore by workers as Uniform curriclumn.'}
    ]
    )
}
export default ProductReducer;