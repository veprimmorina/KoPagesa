import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Denimi() {
    const {id} = useParams();
    const [data, setData] = useState()
    useEffect(()=>{
        axios.get("https://localhost:7000/api/Gjoba/"+id).then(response=>{
            setData(response.data)
        })
    })
  return (
   <>
    { 
        data!=undefined ?
    <div class="page-content container pt-5" style={{backgroundColor: "rgb(228, 241, 14)"}}>
    <div class="page-header text-blue-d2">
        <h1 class="page-title text-secondary-d1">
            Gjoba 
            <small class="page-info">
                <i class="fa fa-angle-double-right text-80"></i>
                Numri identifikues: {data.id}
            </small>
        </h1>

        <div class="page-tools">
            <div class="action-buttons">
                <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                    <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                    Print
                </a>
                <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                    <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                    Export
                </a>
            </div>
        </div>
    </div>

    <div class="container px-0">
        <div class="row mt-4">
            <div class="col-12 col-lg-12">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center text-150">
                            <i class="fa fa-book fa-2x text-success-m2 mr-1"></i>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Kosovo-Police_logo.svg/1200px-Kosovo-Police_logo.svg.png' className='img-responsive rounded-circle' width="120px" alt='' />
                            <span class="text-default-d3">Policia e Kosovës</span>
                        </div>
                    </div>
                </div>
               

                <hr class="row brc-default-l1 mx-n1 mb-4" />

                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            <span class="text-sm text-grey-m2 align-middle"></span>
                            <span class="text-600 text-110 text-blue align-middle"></span>
                        </div>
                        <div class="text-grey-m2">
                            <div class="my-1">
                                {data.adresa}
                            </div>
                            <div class="my-1">
                                {data.koha}
                            </div>
                            <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">111-452-525</b></div>
                        </div>
                    </div>

                    <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr class="d-sm-none" />
                        <div class="text-grey-m2">
                            <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Gjobë
                            </div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> {data.id}</div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Data e leshimit:</span> {data.data}</div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-warning badge-pill px-25">E pa paguar</span></div>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <div class="row text-600 text-white bgc-default-tp1 py-25">
                        <div class="">
                            <p className='text-center'>{data.pershkrimi}</p>
                        </div>
                        
                    </div>

                    

                    <div class="row mt-3">
                        <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Extra note such as company or payment information...
                        </div>

                        <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                            <div class="row my-2">
                                <div class="col-7 text-right">
                                    Denimi
                                </div>
                                <div class="col-5">
                                    <span class="text-120 text-secondary-d1">{data.denimi}</span>
                                </div>
                            </div>

                            <div class="row my-2">
                                <div class="col-7 text-right">
                                     (50%) Me lirë ne qofte se paguhet brenda afatit 14 ditorë
                                </div>
                                <div class="col-5">
                                    <span class="text-110 text-secondary-d1">{data.denimi/2}</span>
                                </div>
                            </div>

                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">
                                    Total 
                                </div>
                                <div class="col-5">
                                    <span class="text-150 text-success-d3 opacity-2">{data.denimi}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <span class="text-secondary-d1 text-105 text-center">Policia e Kosoves/Gjobe/KOPagesa</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
: <p></p>
}  
</>
)
}

export default Denimi