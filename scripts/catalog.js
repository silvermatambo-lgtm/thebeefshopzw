// The Bishop catalogue. Display prices are intentionally omitted until confirmed by the owner.
export const categories=[
  {id:"fresh-cuts",name:"Fresh beef cuts",description:"Premium cuts prepared for every family table.",image:"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=950&q=80"},
  {id:"sausages",name:"Wors & sausages",description:"Your weekend braai favourites.",image:"https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&w=950&q=80"},
  {id:"patties",name:"Burger patties",description:"Fresh patties for every occasion.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=950&q=80"},
  {id:"meat-boxes",name:"Family meat boxes",description:"Convenient selections for family meals.",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=950&q=80"}
];
const product=(id,name,category,description,image)=>({id,name,category,description,image:image||categories.find(x=>x.id===category)?.image});
export const products=[
  product("ribeye","Ribeye steak","fresh-cuts","Tender, richly flavoured steak for grilling."),
  product("tbone","T-bone steak","fresh-cuts","Classic steak with unmistakable bone-in flavour."),
  product("sirloin","Sirloin steak","fresh-cuts","Versatile premium steak for frying or braai."),
  product("fillet","Beef fillet","fresh-cuts","Exceptionally tender premium cut."),
  product("rump","Rump steak","fresh-cuts","Juicy family favourite with robust flavour."),
  product("brisket","Beef brisket","fresh-cuts","A favourite for delicious slow cooking."),
  product("short-ribs","Beef short ribs","fresh-cuts","Rich bone-in ribs for the braai or oven."),
  product("mince","Fresh beef mince","fresh-cuts","Freshly prepared and wonderfully versatile."),
  product("stew","Stewing beef","fresh-cuts","Wholesome cuts for hearty family meals."),
  product("boerewors","Traditional boerewors","sausages","A Zimbabwean braai essential."),
  product("braai-wors","Braai wors","sausages","Well seasoned for sharing around the fire."),
  product("drywors","Drywors","sausages","Rich, savoury dried sausage snack."),
  product("biltong","Biltong","sausages","Tender dried beef snack, prepared with care."),
  product("burger-patties","Beef burger patties","patties","Fresh beef patties for gourmet burgers."),
  product("braai-box","Family braai box","meat-boxes","A generous selection of favourite braai meats."),
  product("family-box","Family meat box","meat-boxes","Hand-picked selection for a busy household."),
  product("premium-box","Premium meat box","meat-boxes","Premium cuts for special meals."),
  product("sausage-box","Sausage & patty box","meat-boxes","Wors and patties ready for your next get-together.")
];
export function productById(id){return products.find(p=>p.id===id);}
