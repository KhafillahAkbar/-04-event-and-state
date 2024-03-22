"use client";
import Tombol_1,{Tombol_2}from "@/component/button";

export default function Home(){
  return(
    <>
    <div className="containex mx-auto">
      <h2>Kuis kota</h2>
      <Tombol_1/>
      <hr></hr>
      <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan"/>
    </div>
    </>
  )
}