"use client";
import Tombol_1,{Tombol_2, Tombol_3}from "@/component/button";
import Gallery from "@/component/gallery";
import Form, { Form_2 } from "@/component/form";
import Accordion from "@/component/accordion";

export default function Home(){
  return(
    <>
    <div className="containex mx-auto">
      <h2>Kuis kota</h2>
      <Tombol_1/>
      <hr></hr>
      <Tombol_2 isiPesan="Ini pesanku" namaTombol="Pesan"/>
    </div>
    <br></br>
    <div className="bg-red-300" onClick={()=>alert('Parent Element : Div')}>
      <Tombol_3 isiPesan="Child element : Tombol-1" namaTombol="Tombol-1" />
      <Tombol_3 isiPesan="Child element : Tombol-2" namaTombol="Tombol-2" />
    </div>
    <br />
    <Gallery />
    <br />
    <Form />
    <br />
    <Form_2 />
    <br />
    <Accordion />
    </>
  )
}