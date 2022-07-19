// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const map0_ctc = ctc2;
  
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v46 = stdlib.protect(ctc1, await interact.apply(), {
    at: './index.rsh:22:55:application',
    fs: ['at ./index.rsh:21:15:application call to [unknown function] (defined at: ./index.rsh:21:19:function exp)'],
    msg: 'apply',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v46],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:24:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v48], secs: v50, time: v49, didSend: v27, from: v47 } = txn1;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v47, v48);
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v48], secs: v50, time: v49, didSend: v27, from: v47 } = txn1;
  ;
  await stdlib.mapSet(map0, v47, v48);
  stdlib.protect(ctc0, await interact.informStatus(true), {
    at: './index.rsh:34:34:application',
    fs: ['at ./index.rsh:33:19:application call to [unknown function] (defined at: ./index.rsh:33:23:function exp)'],
    msg: 'informStatus',
    who: 'Alice'
    });
  const v53 = ['Some', v48];
  stdlib.protect(ctc0, await interact.confirmApplication(v53, stdlib.checkedBigNumberify('./index.rsh:36:42:decimal', stdlib.UInt_max, '1')), {
    at: './index.rsh:36:13:application',
    fs: ['at ./index.rsh:33:19:application call to [unknown function] (defined at: ./index.rsh:33:23:function exp)'],
    msg: 'confirmApplication',
    who: 'Alice'
    });
  
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQC/KGRJIls1AYEIWzUCMRkjEkEACjEAKYEhr2ZCAIs2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXIhJEgaCNBogAmSI0ARJENARJIhJMNAISEURJNQU1/4AE+4Zv7jT/ULAxACmAAQE0/1BmQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCMxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 33,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106353803806106358339810160408190526100229161015b565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a1610085341560076100dc565b33600090815260046020908152604082208054918401515160016001600160a01b03909116620100000261ff01600160b01b031990931692909217821790558180558190556100d690600290610105565b5061024f565b816101015760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b50805461011190610214565b6000825580601f10610121575050565b601f01602090049060005260206000209081019061013f9190610142565b50565b5b808211156101575760008155600101610143565b5090565b600081830360408082121561016f57600080fd5b80518082016001600160401b03808211838310171561019e57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101b757600080fd5b8351945060208501915084821081831117156101e357634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b038216821461020257600080fd5b90825260208101919091529392505050565b600181811c9082168061022857607f821691505b6020821081141561024957634e487b7160e01b600052602260045260246000fd5b50919050565b6103d78061025e6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780633bc5b7bf1461006d578063832307571461009a578063ab53f2c6146100af57005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5061008d610088366004610276565b6100d2565b60405161006491906102bc565b3480156100a657600080fd5b5060015461005a565b3480156100bb57600080fd5b506100c46100fe565b604051610064929190610309565b60408051606081018252600080825260208201819052918101919091526100f88261019b565b92915050565b60006060600054600280805461011390610366565b80601f016020809104026020016040519081016040528092919081815260200182805461013f90610366565b801561018c5780601f106101615761010080835404028352916020019161018c565b820191906000526020600020905b81548152906001019060200180831161016f57829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156101e7576101e76102a6565b1415610267576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610228576102286102a6565b6001811115610239576102396102a6565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b60008082526020820152919050565b60006020828403121561028857600080fd5b81356001600160a01b038116811461029f57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106102e157634e487b7160e01b600052602160045260246000fd5b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b82815260006020604081840152835180604085015260005b8181101561033d57858101830151858201606001528201610321565b8181111561034f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061037a57607f821691505b6020821081141561039b57634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122020a75530e58bec46ed4a3dae0e567d1d8d939a912b695b76c9983e0b58b89e3664736f6c634300080c0033`,
  BytecodeLen: 1589,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice
  };
export const _APIs = {
  };
