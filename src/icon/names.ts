const stringLitArray = <L extends string>(arr: L[]) => arr;
export const CoinIconNameList = [
    '1st',
    '300',
    'ada',
    'adc',
    'adst',
    'adt',
    'adx',
    'ae',
    'aeon',
    'aidoc',
    'aion',
    'amis',
    'amp',
    'anc',
    'ankr',
    'ant',
    'apis',
    'apt',
    'arc',
    'arch',
    'ardr',
    'ark',
    'arn',
    'ath',
    'atl',
    'atom',
    'aur',
    'awc',
    'aya',
    'banx',
    'bat',
    'bay',
    'bc',
    'bch',
    'bchsv',
    'bcn',
    'bft',
    'bnb',
    'bnt',
    'brd',
    'brk',
    'brx',
    'bsd',
    'bsv',
    'bta',
    'btc',
    'btcd',
    'btcp',
    'btg',
    'bth',
    'btm',
    'bts',
    'btu',
    'busd',
    'byts',
    'cfi',
    'chz',
    'clam',
    'clo',
    'cloak',
    'cnd',
    'crm',
    'crpt',
    'cvc',
    'dai',
    'dao',
    'dash',
    'dcn',
    'dcr',
    'dct',
    'dent',
    'dgb',
    'dgd',
    'dgx',
    'dkk',
    'dmd',
    'dnt',
    'doge',
    'dsh',
    'ebst',
    'edg',
    'ela',
    'elf',
    'ely',
    'emc',
    'eng',
    'enj',
    'eos',
    'eosdt',
    'erc',
    'erd',
    'etc',
    'eth',
    'ethplo',
    'eur',
    'eurs',
    'exp',
    'fc2',
    'fcn',
    'fct',
    'fio',
    'flo',
    'frk',
    'fsbt',
    'ftc',
    'ftm',
    'fun',
    'game',
    'gbg',
    'gbp',
    'gbyte',
    'gdc',
    'gemz',
    'gld',
    'gno',
    'gnt',
    'golos',
    'grc',
    'grs',
    'gup',
    'gusd',
    'heat',
    'hex',
    'hmq',
    'hot',
    'hsr',
    'icn',
    'icx',
    'ifc',
    'incnt',
    'ioc',
    'iost',
    'iotx',
    'iq',
    'ixt',
    'jbs',
    'job',
    'joys',
    'kcs',
    'kin',
    'kmd',
    'knc',
    'kore',
    'lbc',
    'ldoge',
    'ledger',
    'link',
    'loki',
    'loom',
    'lrc',
    'lsk',
    'lst',
    'ltc',
    'lto',
    'lun',
    'maid',
    'mana',
    'mco',
    'mer',
    'mint',
    'miota',
    'mkr',
    'mln',
    'mona',
    'mrc',
    'msc',
    'msp',
    'mtl',
    'mtr',
    'mue',
    'myst',
    'nano',
    'nas',
    'nav',
    'nbt',
    'ncash',
    'neo',
    'neos',
    'neu',
    'ngc',
    'nlg',
    'nmc',
    'nmr',
    'note',
    'now',
    'npxs',
    'nut',
    'nvc',
    'nxt',
    'oax',
    'ok',
    'omg',
    'omni',
    'ong',
    'ont',
    'opal',
    'part',
    'pax',
    'pay',
    'piggy',
    'pink',
    'pivx',
    'plbt',
    'plr',
    'plu',
    'pot',
    'powr',
    'ppc',
    'ptoy',
    'pyn',
    'qcn',
    'qrk',
    'qtum',
    'r',
    'rads',
    'rbies',
    'rbt',
    'rby',
    'rcn',
    'rdd',
    'rep',
    'rhoc',
    'rise',
    'rlc',
    'rvn',
    'salt',
    'sar',
    'sbtc',
    'sc',
    'scot',
    'sdc',
    'sia',
    'sjcx',
    'slg',
    'sls',
    'smart',
    'sngls',
    'snm',
    'snrg',
    'snt',
    'srn',
    'start',
    'stash',
    'steem',
    'storj',
    'str',
    'strat',
    'stx',
    'swift',
    'swt',
    'sync',
    'synx',
    'sys',
    'time',
    'tip',
    'tix',
    'tkn',
    'trezor',
    'trig',
    'trst',
    'trx',
    'tusd',
    'tx',
    'ubq',
    'ukg',
    'und',
    'unity',
    'usd',
    'usdc',
    'usdt',
    'ven',
    'vera',
    'veri',
    'vet',
    'via',
    'vib',
    'vior',
    'viu',
    'vnl',
    'vpn',
    'vrc',
    'vtc',
    'vtho',
    'wan',
    'waves',
    'wax',
    'wings',
    'xai',
    'xaur',
    'xbs',
    'xcp',
    'xdn',
    'xel',
    'xem',
    'xlm',
    'xmr',
    'xnn',
    'xns',
    'xpm',
    'xrp',
    'xtz',
    'xvg',
    'xzc',
    'ybc',
    'yec',
    'zec',
    'zeit',
    'zen',
    'zil',
    'zrx',
];

const coinLitArray = stringLitArray(CoinIconNameList);

export type CoinIconName = typeof coinLitArray[number];
