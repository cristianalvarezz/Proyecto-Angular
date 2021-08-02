
import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { Socket } from 'socket.io';
import { usuariosConectados } from '../sockets/socket';

const router = Router();



router.get('/mensajes', ( req: Request, res: Response  ) => {

    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });

});

router.post('/mensajes', ( req: Request, res: Response  ) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    const payload ={
        cuerpo,
        de 
    }

    const server =Server.instance;

    server.io.emit('mensaje-global',payload);
    
    res.json({
        ok: true,
        cuerpo,
        de
    });

});


//esto para enviar a un usuario en particular
router.post('/mensajes/:id', ( req: Request, res: Response  ) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    const payload={
        de,
        cuerpo
    }
    const server =Server.instance;

    //el in me sirve para enviar un mensaje a una persona en un cana en particular
   //recibe el id especifico del usuario y manda el mensaje 
   //evitando poner el in envio un mensaje global 
    server.io.in(id).emit('mensaje-privado',payload)


    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });

});

//servicios para obtener todos los IDs de los usuarios
router.get('/usuarios',(req:Request,res:Response)=>{
    const server =Server.instance;
    //funcion que barre todos los clientes y lso imprime
    server.io.clients((err:any,clientes:string[])=>{
        if(err){
          return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            clientes
         })
    })
})

//obtener usuarios y sus nombres
router.get('/usuarios/detalle',(req:Request,res:Response)=>{
    
  

    res.json({
        ok:true,
        clientes:  usuariosConectados.getLista()
     })

});
export default router;


