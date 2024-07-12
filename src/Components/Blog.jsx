import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import ImageLazyLoading from './ImageLazyLoading';

function Blog() {
   return (
      <div className='blog'>
         <div className="wrapper">
            <div className="space">
               <div> <h1>Fique atento as noticias sobre nós no país e no mundo !</h1></div>
               <div className="txt" >
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, molestias! Natus reprehenderit iusto at consectetur autem laboriosam temporibus dolor labore, omnis ipsum eum, numquam quidem pariatur sapiente? Rerum, rem eveniet.</p>
                  <button className="btn bg-main">Saiba mais <GoArrowUpRight /></button>
               </div>
            </div>
            <div className="blog-boxes">
               <div className="v-boxes">
                  <article>
                     <div className="image">
                        <ImageLazyLoading source="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                     </div>
                     <div className="step">Nova</div>
                     <h1>18 Anos a Prestar Serviços de Excelência ...</h1>
                     <p>Com o rigor que nos caracteriza, queremos fomentar a confiança junto dos nossos clientes, proporcionando os serviços mais avançados e adequados às necessidades presentes e futuras....</p>
                  </article>
                  <article>
                     <div className="image">
                        <ImageLazyLoading source="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                     </div>
                     <div className="step">Nova</div>
                     <h1>18 Anos a Prestar Serviços de Excelência ...</h1>
                     <p>Com o rigor que nos caracteriza, queremos fomentar a confiança junto dos nossos clientes, proporcionando os serviços mais avançados e adequados às necessidades presentes e futuras....</p>   </article>
               </div>
               <article className='vt-box'>
                  <div className="image">
                     <ImageLazyLoading source="https://images.pexels.com/photos/3183135/pexels-photo-3183135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                  <div className="text">
                     <div className="step">Nova</div>
                     <h1>18 Anos a Prestar Serviços de Excelência ...</h1>
                     <p>Com o rigor que nos caracteriza, queremos fomentar a confiança junto dos nossos clientes, proporcionando os serviços mais avançados e adequados às necessidades presentes e futuras....</p>
                  </div>
               </article>
            </div>

         </div>
      </div>
   )
}

export default Blog