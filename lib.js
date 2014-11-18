
function getRandomBetween(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

function makeNodes(numNodes, cb){
    var nodes = [];

    for(i = 0; i < numNodes; i++){
        nodes.push({name: ("a.b.c.Neuron"+i), size:  getRandomBetween(-100,100), imports:[] });
    }

    for(i = 0; i < numNodes; i++){
        var tmp = [];
        numSynapses = getRandomBetween(0, 5);
        for(j = 0; j < numSynapses; j++){

            synapse = getRandomBetween(0, numNodes-1);
            tmp.push(nodes[synapse].name);

        }
        nodes[i].imports = tmp;
    }



    cb(nodes);
}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
