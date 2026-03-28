import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "../components/NewsDetailscard";
import { useEffect, useState } from "react";

const Newsdetails = () => {
       const data=useLoaderData();
    const {id}=useParams();
    const [news,setnews]=useState({})
    console.log(data,id,news)
    useEffect(()=>{
 const newsDatails=data.find(singleNews=>singleNews.id==id);
 setnews(newsDatails)
    },[data,id])
    return (
        <div>
         <header className="py-5">
            <Header></Header>
         </header>
         <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
            <h2 className="font-bold mb-5">News Details</h2>
            <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
            <RighAside></RighAside>
        </aside>
         </main>
        </div>
    );
};

export default Newsdetails;