let nf = document.querySelector('.nf')
let serie = document.querySelector('.serie')
let motivo = document.querySelector('.motivo')
let emissor = document.querySelector('.emissor')
let volume = document.querySelector('.volume')
let trecho = document.querySelector('.trechos-sao')


export default function gerarepl(){
    cmds = '';
        cmds += lineFeed;
        cmds += "N";
        cmds += lineFeed;
        cmds += "Q609,24";
        cmds += lineFeed;
        cmds += "D7";
        cmds += lineFeed;
        cmds += "q784";
        cmds += lineFeed;
        cmds += "A80,10,0,5,2,2,N,\"PENDENCIA\"";
        cmds += lineFeed;
        cmds += `A80,200,0,4,2,2,N,\"NF: ${nf.value}  \"`;
        cmds += lineFeed;
        cmds += `A80,260,0,4,2,2,N,\"SERIE: ${serie.value} \"`;
        cmds += lineFeed;
        cmds += `A300,260,0,4,2,2,N,\" ${'5'}/${volume.value}"`;
        cmds += lineFeed;
        cmds += `A430,200,0,4,2,2,N,\"${trecho.value} \"`;
        cmds += lineFeed;
        cmds += "LO22,350,800,2";
        cmds += lineFeed;
        cmds += `A180,370,0,4,2,2,N,\"MOTIVO:\"`;
        cmds += lineFeed;
        cmds += `A80,450,0,4,2,2,N,\"${motivo.value}\"`;
        cmds += lineFeed;
        cmds += `A80,560,0,2,2,2,N,\"EMISSOR: ${emissor.value}\"`;
        cmds += lineFeed;
        cmds += "LO22,610,800,2";
        cmds += lineFeed;
        cmds += `A80,620,0,4,2,2,N,\"DATA: ${datafull} \"`;
        cmds += lineFeed;
        cmds += "P";
        cmds += lineFeed;
        
        return cmds
}