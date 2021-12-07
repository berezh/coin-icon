import React, { SVGAttributes, useMemo } from 'react';

import { CoinIconName } from '../names';
// Prepare icons:
// 1. Remove width and height attributes
import i1st from '../svg/1st.svg';
import i300 from '../svg/300.svg';
import ada from '../svg/ada.svg';
import adc from '../svg/adc.svg';
import adst from '../svg/adst.svg';
import adt from '../svg/adt.svg';
import adx from '../svg/adx.svg';
import ae from '../svg/ae.svg';
import aeon from '../svg/aeon.svg';
import aidoc from '../svg/aidoc.svg';
import aion from '../svg/aion.svg';
import amis from '../svg/amis.svg';
import amp from '../svg/amp.svg';
import anc from '../svg/anc.svg';
import ankr from '../svg/ankr.svg';
import ant from '../svg/ant.svg';
import apis from '../svg/apis.svg';
import apt from '../svg/apt.svg';
import arc from '../svg/arc.svg';
import arch from '../svg/arch.svg';
import ardr from '../svg/ardr.svg';
import ark from '../svg/ark.svg';
import arn from '../svg/arn.svg';
import ath from '../svg/ath.svg';
import atl from '../svg/atl.svg';
import atom from '../svg/atom.svg';
import aur from '../svg/aur.svg';
import awc from '../svg/awc.svg';
import aya from '../svg/aya.svg';
import banx from '../svg/banx.svg';
import bat from '../svg/bat.svg';
import bay from '../svg/bay.svg';
import bc from '../svg/bc.svg';
import bch from '../svg/bch.svg';
import bchsv from '../svg/bchsv.svg';
import bcn from '../svg/bcn.svg';
import bft from '../svg/bft.svg';
import bnb from '../svg/bnb.svg';
import bnt from '../svg/bnt.svg';
import brd from '../svg/brd.svg';
import brk from '../svg/brk.svg';
import brx from '../svg/brx.svg';
import bsd from '../svg/bsd.svg';
import bsv from '../svg/bsv.svg';
import bta from '../svg/bta.svg';
import btc from '../svg/btc.svg';
import btcd from '../svg/btcd.svg';
import btcp from '../svg/btcp.svg';
import btg from '../svg/btg.svg';
import bth from '../svg/bth.svg';
import btm from '../svg/btm.svg';
import bts from '../svg/bts.svg';
import btu from '../svg/btu.svg';
import busd from '../svg/busd.svg';
import byts from '../svg/byts.svg';
import cfi from '../svg/cfi.svg';
import chz from '../svg/chz.svg';
import clam from '../svg/clam.svg';
import clo from '../svg/clo.svg';
import cloak from '../svg/cloak.svg';
import cnd from '../svg/cnd.svg';
import crm from '../svg/crm.svg';
import crpt from '../svg/crpt.svg';
import cvc from '../svg/cvc.svg';
import dai from '../svg/dai.svg';
import dao from '../svg/dao.svg';
import dash from '../svg/dash.svg';
import dcn from '../svg/dcn.svg';
import dcr from '../svg/dcr.svg';
import dct from '../svg/dct.svg';
import dent from '../svg/dent.svg';
import dgb from '../svg/dgb.svg';
import dgd from '../svg/dgd.svg';
import dgx from '../svg/dgx.svg';
import dkk from '../svg/dkk.svg';
import dmd from '../svg/dmd.svg';
import dnt from '../svg/dnt.svg';
import doge from '../svg/doge.svg';
import dsh from '../svg/dsh.svg';
import ebst from '../svg/ebst.svg';
import edg from '../svg/edg.svg';
import ela from '../svg/ela.svg';
import elf from '../svg/elf.svg';
import ely from '../svg/ely.svg';
import emc from '../svg/emc.svg';
import eng from '../svg/eng.svg';
import enj from '../svg/enj.svg';
import eos from '../svg/eos.svg';
import eosdt from '../svg/eosdt.svg';
import erc from '../svg/erc.svg';
import erd from '../svg/erd.svg';
import etc from '../svg/etc.svg';
import eth from '../svg/eth.svg';
import ethplo from '../svg/ethplo.svg';
import eur from '../svg/eur.svg';
import eurs from '../svg/eurs.svg';
import exp from '../svg/exp.svg';
import fc2 from '../svg/fc2.svg';
import fcn from '../svg/fcn.svg';
import fct from '../svg/fct.svg';
import fio from '../svg/fio.svg';
import flo from '../svg/flo.svg';
import frk from '../svg/frk.svg';
import fsbt from '../svg/fsbt.svg';
import ftc from '../svg/ftc.svg';
import ftm from '../svg/ftm.svg';
import fun from '../svg/fun.svg';
import game from '../svg/game.svg';
import gbg from '../svg/gbg.svg';
import gbp from '../svg/gbp.svg';
import gbyte from '../svg/gbyte.svg';
import gdc from '../svg/gdc.svg';
import gemz from '../svg/gemz.svg';
import gld from '../svg/gld.svg';
import gno from '../svg/gno.svg';
import gnt from '../svg/gnt.svg';
import golos from '../svg/golos.svg';
import grc from '../svg/grc.svg';
import grs from '../svg/grs.svg';
import gup from '../svg/gup.svg';
import gusd from '../svg/gusd.svg';
import heat from '../svg/heat.svg';
import hex from '../svg/hex.svg';
import hmq from '../svg/hmq.svg';
import hot from '../svg/hot.svg';
import hsr from '../svg/hsr.svg';
import icn from '../svg/icn.svg';
import icx from '../svg/icx.svg';
import ifc from '../svg/ifc.svg';
import incnt from '../svg/incnt.svg';
import ioc from '../svg/ioc.svg';
import iost from '../svg/iost.svg';
import iotx from '../svg/iotx.svg';
import iq from '../svg/iq.svg';
import ixt from '../svg/ixt.svg';
import jbs from '../svg/jbs.svg';
import job from '../svg/job.svg';
import joys from '../svg/joys.svg';
import kcs from '../svg/kcs.svg';
import kin from '../svg/kin.svg';
import kmd from '../svg/kmd.svg';
import knc from '../svg/knc.svg';
import kore from '../svg/kore.svg';
import lbc from '../svg/lbc.svg';
import ldoge from '../svg/ldoge.svg';
import ledger from '../svg/ledger.svg';
import link from '../svg/link.svg';
import loki from '../svg/loki.svg';
import loom from '../svg/loom.svg';
import lrc from '../svg/lrc.svg';
import lsk from '../svg/lsk.svg';
import lst from '../svg/lst.svg';
import ltc from '../svg/ltc.svg';
import lto from '../svg/lto.svg';
import lun from '../svg/lun.svg';
import maid from '../svg/maid.svg';
import mana from '../svg/mana.svg';
import mco from '../svg/mco.svg';
import mer from '../svg/mer.svg';
import mint from '../svg/mint.svg';
import miota from '../svg/miota.svg';
import mkr from '../svg/mkr.svg';
import mln from '../svg/mln.svg';
import mona from '../svg/mona.svg';
import mrc from '../svg/mrc.svg';
import msc from '../svg/msc.svg';
import msp from '../svg/msp.svg';
import mtl from '../svg/mtl.svg';
import mtr from '../svg/mtr.svg';
import mue from '../svg/mue.svg';
import myst from '../svg/myst.svg';
import nano from '../svg/nano.svg';
import nas from '../svg/nas.svg';
import nav from '../svg/nav.svg';
import nbt from '../svg/nbt.svg';
import ncash from '../svg/ncash.svg';
import neo from '../svg/neo.svg';
import neos from '../svg/neos.svg';
import neu from '../svg/neu.svg';
import ngc from '../svg/ngc.svg';
import nlg from '../svg/nlg.svg';
import nmc from '../svg/nmc.svg';
import nmr from '../svg/nmr.svg';
import note from '../svg/note.svg';
import now from '../svg/now.svg';
import npxs from '../svg/npxs.svg';
import nut from '../svg/nut.svg';
import nvc from '../svg/nvc.svg';
import nxt from '../svg/nxt.svg';
// import    from '../svg/oax.svg';
// import    from '../svg/ok.svg';
// import    from '../svg/omg.svg';
// import    from '../svg/omni.svg';
// import    from '../svg/ong.svg';
// import    from '../svg/ont.svg';
// import    from '../svg/opal.svg';
// import    from '../svg/part.svg';
// import    from '../svg/pax.svg';
// import    from '../svg/pay.svg';
// import    from '../svg/piggy.svg';
// import    from '../svg/pink.svg';
// import    from '../svg/pivx.svg';
// import    from '../svg/plbt.svg';
// import    from '../svg/plr.svg';
// import    from '../svg/plu.svg';
// import    from '../svg/pot.svg';
// import    from '../svg/powr.svg';
// import    from '../svg/ppc.svg';
// import    from '../svg/ptoy.svg';
// import    from '../svg/pyn.svg';
// import    from '../svg/qcn.svg';
// import    from '../svg/qrk.svg';
// import    from '../svg/qtum.svg';
// import    from '../svg/r.svg';
// import    from '../svg/rads.svg';
// import    from '../svg/rbies.svg';
// import    from '../svg/rbt.svg';
// import    from '../svg/rby.svg';
// import    from '../svg/rcn.svg';
// import    from '../svg/rdd.svg';
// import    from '../svg/rep.svg';
// import    from '../svg/rhoc.svg';
// import    from '../svg/rise.svg';
// import    from '../svg/rlc.svg';
// import    from '../svg/rvn.svg';
// import    from '../svg/salt.svg';
// import    from '../svg/sar.svg';
// import    from '../svg/sbtc.svg';
// import    from '../svg/sc.svg';
// import    from '../svg/scot.svg';
// import    from '../svg/sdc.svg';
// import    from '../svg/sia.svg';
// import    from '../svg/sjcx.svg';
// import    from '../svg/slg.svg';
// import    from '../svg/sls.svg';
// import    from '../svg/smart.svg';
// import    from '../svg/sngls.svg';
// import    from '../svg/snm.svg';
// import    from '../svg/snrg.svg';
// import    from '../svg/snt.svg';
// import    from '../svg/srn.svg';
// import    from '../svg/start.svg';
// import    from '../svg/stash.svg';
// import    from '../svg/steem.svg';
// import    from '../svg/storj.svg';
// import    from '../svg/str.svg';
// import    from '../svg/strat.svg';
// import    from '../svg/stx.svg';
// import    from '../svg/swift.svg';
// import    from '../svg/swt.svg';
// import    from '../svg/sync.svg';
// import    from '../svg/synx.svg';
// import    from '../svg/sys.svg';
// import    from '../svg/time.svg';
// import    from '../svg/tip.svg';
// import    from '../svg/tix.svg';
// import    from '../svg/tkn.svg';
// import    from '../svg/trezor.svg';
// import    from '../svg/trig.svg';
// import    from '../svg/trst.svg';
// import    from '../svg/trx.svg';
// import    from '../svg/tusd.svg';
// import    from '../svg/tx.svg';
// import    from '../svg/ubq.svg';
// import    from '../svg/ukg.svg';
// import    from '../svg/und.svg';
// import    from '../svg/unity.svg';
// import    from '../svg/usd.svg';
// import    from '../svg/usdc.svg';
// import    from '../svg/usdt.svg';
// import    from '../svg/ven.svg';
// import    from '../svg/vera.svg';
// import    from '../svg/veri.svg';
// import    from '../svg/vet.svg';
// import    from '../svg/via.svg';
// import    from '../svg/vib.svg';
// import    from '../svg/vior.svg';
// import    from '../svg/viu.svg';
// import    from '../svg/vnl.svg';
// import    from '../svg/vpn.svg';
// import    from '../svg/vrc.svg';
// import    from '../svg/vtc.svg';
// import    from '../svg/vtho.svg';
// import    from '../svg/wan.svg';
// import    from '../svg/waves.svg';
// import    from '../svg/wax.svg';
// import    from '../svg/wings.svg';
// import    from '../svg/xai.svg';
// import    from '../svg/xaur.svg';
// import    from '../svg/xbs.svg';
// import    from '../svg/xcp.svg';
// import    from '../svg/xdn.svg';
// import    from '../svg/xel.svg';
// import    from '../svg/xem.svg';
// import    from '../svg/xlm.svg';
// import    from '../svg/xmr.svg';
// import    from '../svg/xnn.svg';
// import    from '../svg/xns.svg';
// import    from '../svg/xpm.svg';
// import    from '../svg/xrp.svg';
// import    from '../svg/xtz.svg';
// import    from '../svg/xvg.svg';
// import    from '../svg/xzc.svg';
// import    from '../svg/ybc.svg';
// import    from '../svg/yec.svg';
// import    from '../svg/zec.svg';
// import    from '../svg/zeit.svg';
// import    from '../svg/zen.svg';
// import    from '../svg/zil.svg';
// import    from '../svg/zrx.svg';

const icons: Record<string, React.FC> = {
    ['1st']: i1st,
    ['300']: i300,
    ['ada']: ada,
    ['adc']: adc,
    ['adst']: adst,
    ['adt']: adt,
    ['adx']: adx,
    ['ae']: ae,
    ['aeon']: aeon,
    ['aidoc']: aidoc,
    ['aion']: aion,
    ['amis']: amis,
    ['amp']: amp,
    ['anc']: anc,
    ['ankr']: ankr,
    ['ant']: ant,
    ['apis']: apis,
    ['apt']: apt,
    ['arc']: arc,
    ['arch']: arch,
    ['ardr']: ardr,
    ['ark']: ark,
    ['arn']: arn,
    ['ath']: ath,
    ['atl']: atl,
    ['atom']: atom,
    ['aur']: aur,
    ['awc']: awc,
    ['aya']: aya,
    ['banx']: banx,
    ['bat']: bat,
    ['bay']: bay,
    ['bc']: bc,
    ['bch']: bch,
    ['bchsv']: bchsv,
    ['bcn']: bcn,
    ['bft']: bft,
    ['bnb']: bnb,
    ['bnt']: bnt,
    ['brd']: brd,
    ['brk']: brk,
    ['brx']: brx,
    ['bsd']: bsd,
    ['bsv']: bsv,
    ['bta']: bta,
    ['btc']: btc,
    ['btcd']: btcd,
    ['btcp']: btcp,
    ['btg']: btg,
    ['bth']: bth,
    ['btm']: btm,
    ['bts']: bts,
    ['btu']: btu,
    ['busd']: busd,
    ['byts']: byts,
    ['cfi']: cfi,
    ['chz']: chz,
    ['clam']: clam,
    ['clo']: clo,
    ['cloak']: cloak,
    ['cnd']: cnd,
    ['crm']: crm,
    ['crpt']: crpt,
    ['cvc']: cvc,
    ['dai']: dai,
    ['dao']: dao,
    ['dash']: dash,
    ['dcn']: dcn,
    ['dcr']: dcr,
    ['dct']: dct,
    ['dent']: dent,
    ['dgb']: dgb,
    ['dgd']: dgd,
    ['dgx']: dgx,
    ['dkk']: dkk,
    ['dmd']: dmd,
    ['dnt']: dnt,
    ['doge']: doge,
    ['dsh']: dsh,
    ['ebst']: ebst,
    ['edg']: edg,
    ['ela']: ela,
    ['elf']: elf,
    ['ely']: ely,
    ['emc']: emc,
    ['eng']: eng,
    ['enj']: enj,
    ['eos']: eos,
    ['eosdt']: eosdt,
    ['erc']: erc,
    ['erd']: erd,
    ['etc']: etc,
    ['eth']: eth,
    ['ethplo']: ethplo,
    ['eur']: eur,
    ['eurs']: eurs,
    ['exp']: exp,
    ['fc2']: fc2,
    ['fcn']: fcn,
    ['fct']: fct,
    ['fio']: fio,
    ['flo']: flo,
    ['frk']: frk,
    ['fsbt']: fsbt,
    ['ftc']: ftc,
    ['ftm']: ftm,
    ['fun']: fun,
    ['game']: game,
    ['gbg']: gbg,
    ['gbp']: gbp,
    ['gbyte']: gbyte,
    ['gdc']: gdc,
    ['gemz']: gemz,
    ['gld']: gld,
    ['gno']: gno,
    ['gnt']: gnt,
    ['golos']: golos,
    ['grc']: grc,
    ['grs']: grs,
    ['gup']: gup,
    ['gusd']: gusd,
    ['heat']: heat,
    ['hex']: hex,
    ['hmq']: hmq,
    ['hot']: hot,
    ['hsr']: hsr,
    ['icn']: icn,
    ['icx']: icx,
    ['ifc']: ifc,
    ['incnt']: incnt,
    ['ioc']: ioc,
    ['iost']: iost,
    ['iotx']: iotx,
    ['iq']: iq,
    ['ixt']: ixt,
    ['jbs']: jbs,
    ['job']: job,
    ['joys']: joys,
    ['kcs']: kcs,
    ['kin']: kin,
    ['kmd']: kmd,
    ['knc']: knc,
    ['kore']: kore,
    ['lbc']: lbc,
    ['ldoge']: ldoge,
    ['ledger']: ledger,
    ['link']: link,
    ['loki']: loki,
    ['loom']: loom,
    ['lrc']: lrc,
    ['lsk']: lsk,
    ['lst']: lst,
    ['ltc']: ltc,
    ['lto']: lto,
    ['lun']: lun,
    ['maid']: maid,
    ['mana']: mana,
    ['mco']: mco,
    ['mer']: mer,
    ['mint']: mint,
    ['miota']: miota,
    ['mkr']: mkr,
    ['mln']: mln,
    ['mona']: mona,
    ['mrc']: mrc,
    ['msc']: msc,
    ['msp']: msp,
    ['mtl']: mtl,
    ['mtr']: mtr,
    ['mue']: mue,
    ['myst']: myst,
    ['nano']: nano,
    ['nas']: nas,
    ['nav']: nav,
    ['nbt']: nbt,
    ['ncash']: ncash,
    ['neo']: neo,
    ['neos']: neos,
    ['neu']: neu,
    ['ngc']: ngc,
    ['nlg']: nlg,
    ['nmc']: nmc,
    ['nmr']: nmr,
    ['note']: note,
    ['now']: now,
    ['npxs']: npxs,
    ['nut']: nut,
    ['nvc']: nvc,
    ['nxt']: nxt,
    // ['oax']:    ,
    // ['ok']:    ,
    // ['omg']:    ,
    // ['omni']:    ,
    // ['ong']:    ,
    // ['ont']:    ,
    // ['opal']:    ,
    // ['part']:    ,
    // ['pax']:    ,
    // ['pay']:    ,
    // ['piggy']:    ,
    // ['pink']:    ,
    // ['pivx']:    ,
    // ['plbt']:    ,
    // ['plr']:    ,
    // ['plu']:    ,
    // ['pot']:    ,
    // ['powr']:    ,
    // ['ppc']:    ,
    // ['ptoy']:    ,
    // ['pyn']:    ,
    // ['qcn']:    ,
    // ['qrk']:    ,
    // ['qtum']:    ,
    // ['r']:    ,
    // ['rads']:    ,
    // ['rbies']:    ,
    // ['rbt']:    ,
    // ['rby']:    ,
    // ['rcn']:    ,
    // ['rdd']:    ,
    // ['rep']:    ,
    // ['rhoc']:    ,
    // ['rise']:    ,
    // ['rlc']:    ,
    // ['rvn']:    ,
    // ['salt']:    ,
    // ['sar']:    ,
    // ['sbtc']:    ,
    // ['sc']:    ,
    // ['scot']:    ,
    // ['sdc']:    ,
    // ['sia']:    ,
    // ['sjcx']:    ,
    // ['slg']:    ,
    // ['sls']:    ,
    // ['smart']:    ,
    // ['sngls']:    ,
    // ['snm']:    ,
    // ['snrg']:    ,
    // ['snt']:    ,
    // ['srn']:    ,
    // ['start']:    ,
    // ['stash']:    ,
    // ['steem']:    ,
    // ['storj']:    ,
    // ['str']:    ,
    // ['strat']:    ,
    // ['stx']:    ,
    // ['swift']:    ,
    // ['swt']:    ,
    // ['sync']:    ,
    // ['synx']:    ,
    // ['sys']:    ,
    // ['time']:    ,
    // ['tip']:    ,
    // ['tix']:    ,
    // ['tkn']:    ,
    // ['trezor']:    ,
    // ['trig']:    ,
    // ['trst']:    ,
    // ['trx']:    ,
    // ['tusd']:    ,
    // ['tx']:    ,
    // ['ubq']:    ,
    // ['ukg']:    ,
    // ['und']:    ,
    // ['unity']:    ,
    // ['usd']:    ,
    // ['usdc']:    ,
    // ['usdt']:    ,
    // ['ven']:    ,
    // ['vera']:    ,
    // ['veri']:    ,
    // ['vet']:    ,
    // ['via']:    ,
    // ['vib']:    ,
    // ['vior']:    ,
    // ['viu']:    ,
    // ['vnl']:    ,
    // ['vpn']:    ,
    // ['vrc']:    ,
    // ['vtc']:    ,
    // ['vtho']:    ,
    // ['wan']:    ,
    // ['waves']:    ,
    // ['wax']:    ,
    // ['wings']:    ,
    // ['xai']:    ,
    // ['xaur']:    ,
    // ['xbs']:    ,
    // ['xcp']:    ,
    // ['xdn']:    ,
    // ['xel']:    ,
    // ['xem']:    ,
    // ['xlm']:    ,
    // ['xmr']:    ,
    // ['xnn']:    ,
    // ['xns']:    ,
    // ['xpm']:    ,
    // ['xrp']:    ,
    // ['xtz']:    ,
    // ['xvg']:    ,
    // ['xzc']:    ,
    // ['ybc']:    ,
    // ['yec']:    ,
    // ['zec']:    ,
    // ['zeit']:    ,
    // ['zen']:    ,
    // ['zil']:    ,
    // ['zrx']:    ,
};

interface Props extends SVGAttributes<any> {
    name: CoinIconName;
}

export const CoinIcon: React.FC<Props> = ({ name, style, ...props }) => {
    const svgAttrs: Partial<SVGAttributes<any>> = useMemo(() => {
        return {
            fill: 'currentColor',
            style: { display: 'inline-block', height: '1em', ...style },
            ...props,
        };
    }, [style, props]);

    const Icon = icons[name];
    return Icon ? <Icon {...svgAttrs} /> : null;
};
