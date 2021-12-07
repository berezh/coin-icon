import React, { SVGAttributes, useMemo } from 'react';

import { CoinIconName } from '../names';
// Prepare icons:
// 1. Remove width and height attributes
import i1st from '../svg/1st.svg';
import i300 from '../svg/300.svg';
import iada from '../svg/ada.svg';
import iadc from '../svg/adc.svg';
import iadst from '../svg/adst.svg';
import iadt from '../svg/adt.svg';
import iadx from '../svg/adx.svg';
import iae from '../svg/ae.svg';
import iaeon from '../svg/aeon.svg';
import iaidoc from '../svg/aidoc.svg';
import iaion from '../svg/aion.svg';
import iamis from '../svg/amis.svg';
import iamp from '../svg/amp.svg';
import ianc from '../svg/anc.svg';
import iankr from '../svg/ankr.svg';
import iant from '../svg/ant.svg';
import iapis from '../svg/apis.svg';
import iapt from '../svg/apt.svg';
import iarc from '../svg/arc.svg';
import iarch from '../svg/arch.svg';
import iardr from '../svg/ardr.svg';
import iark from '../svg/ark.svg';
import iarn from '../svg/arn.svg';
import iath from '../svg/ath.svg';
import iatl from '../svg/atl.svg';
import iatom from '../svg/atom.svg';
import iaur from '../svg/aur.svg';
import iawc from '../svg/awc.svg';
import iaya from '../svg/aya.svg';
import ibanx from '../svg/banx.svg';
import ibat from '../svg/bat.svg';
import ibay from '../svg/bay.svg';
import ibc from '../svg/bc.svg';
import ibch from '../svg/bch.svg';
import ibchsv from '../svg/bchsv.svg';
import ibcn from '../svg/bcn.svg';
import ibft from '../svg/bft.svg';
import ibnb from '../svg/bnb.svg';
import ibnt from '../svg/bnt.svg';
import ibrd from '../svg/brd.svg';
import ibrk from '../svg/brk.svg';
import ibrx from '../svg/brx.svg';
import ibsd from '../svg/bsd.svg';
import ibsv from '../svg/bsv.svg';
import ibta from '../svg/bta.svg';
import ibtc from '../svg/btc.svg';
import ibtcd from '../svg/btcd.svg';
import ibtcp from '../svg/btcp.svg';
import ibtg from '../svg/btg.svg';
import ibth from '../svg/bth.svg';
import ibtm from '../svg/btm.svg';
import ibts from '../svg/bts.svg';
import ibtu from '../svg/btu.svg';
import ibusd from '../svg/busd.svg';
import ibyts from '../svg/byts.svg';
import icfi from '../svg/cfi.svg';
import ichz from '../svg/chz.svg';
import iclam from '../svg/clam.svg';
import iclo from '../svg/clo.svg';
import icloak from '../svg/cloak.svg';
import icnd from '../svg/cnd.svg';
import icrm from '../svg/crm.svg';
import icrpt from '../svg/crpt.svg';
import icvc from '../svg/cvc.svg';
import idai from '../svg/dai.svg';
import idao from '../svg/dao.svg';
import idash from '../svg/dash.svg';
import idcn from '../svg/dcn.svg';
import idcr from '../svg/dcr.svg';
import idct from '../svg/dct.svg';
import ident from '../svg/dent.svg';
import idgb from '../svg/dgb.svg';
import idgd from '../svg/dgd.svg';
import idgx from '../svg/dgx.svg';
import idkk from '../svg/dkk.svg';
import idmd from '../svg/dmd.svg';
import idnt from '../svg/dnt.svg';
import idoge from '../svg/doge.svg';
import idsh from '../svg/dsh.svg';
import iebst from '../svg/ebst.svg';
import iedg from '../svg/edg.svg';
import iela from '../svg/ela.svg';
import ielf from '../svg/elf.svg';
import iely from '../svg/ely.svg';
import iemc from '../svg/emc.svg';
import ieng from '../svg/eng.svg';
import ienj from '../svg/enj.svg';
import ieos from '../svg/eos.svg';
import ieosdt from '../svg/eosdt.svg';
import ierc from '../svg/erc.svg';
import ierd from '../svg/erd.svg';
import ietc from '../svg/etc.svg';
import ieth from '../svg/eth.svg';
import iethplo from '../svg/ethplo.svg';
import ieur from '../svg/eur.svg';
import ieurs from '../svg/eurs.svg';
import iexp from '../svg/exp.svg';
import ifc2 from '../svg/fc2.svg';
import ifcn from '../svg/fcn.svg';
import ifct from '../svg/fct.svg';
import ifio from '../svg/fio.svg';
import iflo from '../svg/flo.svg';
import ifrk from '../svg/frk.svg';
import ifsbt from '../svg/fsbt.svg';
import iftc from '../svg/ftc.svg';
import iftm from '../svg/ftm.svg';
import ifun from '../svg/fun.svg';
import igame from '../svg/game.svg';
import igbg from '../svg/gbg.svg';
import igbp from '../svg/gbp.svg';
import igbyte from '../svg/gbyte.svg';
import igdc from '../svg/gdc.svg';
import igemz from '../svg/gemz.svg';
import igld from '../svg/gld.svg';
import igno from '../svg/gno.svg';
import ignt from '../svg/gnt.svg';
import igolos from '../svg/golos.svg';
import igrc from '../svg/grc.svg';
import igrs from '../svg/grs.svg';
import igup from '../svg/gup.svg';
import igusd from '../svg/gusd.svg';
import iheat from '../svg/heat.svg';
import ihex from '../svg/hex.svg';
import ihmq from '../svg/hmq.svg';
import ihot from '../svg/hot.svg';
import ihsr from '../svg/hsr.svg';
import iicn from '../svg/icn.svg';
import iicx from '../svg/icx.svg';
import iifc from '../svg/ifc.svg';
import iincnt from '../svg/incnt.svg';
import iioc from '../svg/ioc.svg';
import iiost from '../svg/iost.svg';
import iiotx from '../svg/iotx.svg';
import iiq from '../svg/iq.svg';
import iixt from '../svg/ixt.svg';
import ijbs from '../svg/jbs.svg';
import ijob from '../svg/job.svg';
import ijoys from '../svg/joys.svg';
// import i from '../svg/kcs.svg';
// import i from '../svg/kin.svg';
// import i from '../svg/kmd.svg';
// import i from '../svg/knc.svg';
// import i from '../svg/kore.svg';
// import i from '../svg/lbc.svg';
// import i from '../svg/ldoge.svg';
// import i from '../svg/ledger.svg';
// import i from '../svg/link.svg';
// import i from '../svg/loki.svg';
// import i from '../svg/loom.svg';
// import i from '../svg/lrc.svg';
// import i from '../svg/lsk.svg';
// import i from '../svg/lst.svg';
// import i from '../svg/ltc.svg';
// import i from '../svg/lto.svg';
// import i from '../svg/lun.svg';
// import i from '../svg/maid.svg';
// import i from '../svg/mana.svg';
// import i from '../svg/mco.svg';
// import i from '../svg/mer.svg';
// import i from '../svg/mint.svg';
// import i from '../svg/miota.svg';
// import i from '../svg/mkr.svg';
// import i from '../svg/mln.svg';
// import i from '../svg/mona.svg';
// import i from '../svg/mrc.svg';
// import i from '../svg/msc.svg';
// import i from '../svg/msp.svg';
// import i from '../svg/mtl.svg';
// import i from '../svg/mtr.svg';
// import i from '../svg/mue.svg';
// import i from '../svg/myst.svg';
// import i from '../svg/nano.svg';
// import i from '../svg/nas.svg';
// import i from '../svg/nav.svg';
// import i from '../svg/nbt.svg';
// import i from '../svg/ncash.svg';
// import i from '../svg/neo.svg';
// import i from '../svg/neos.svg';
// import i from '../svg/neu.svg';
// import i from '../svg/ngc.svg';
// import i from '../svg/nlg.svg';
// import i from '../svg/nmc.svg';
// import i from '../svg/nmr.svg';
// import i from '../svg/note.svg';
// import i from '../svg/now.svg';
// import i from '../svg/npxs.svg';
// import i from '../svg/nut.svg';
// import i from '../svg/nvc.svg';
// import i from '../svg/nxt.svg';
// import i from '../svg/oax.svg';
// import i from '../svg/ok.svg';
// import i from '../svg/omg.svg';
// import i from '../svg/omni.svg';
// import i from '../svg/ong.svg';
// import i from '../svg/ont.svg';
// import i from '../svg/opal.svg';
// import i from '../svg/part.svg';
// import i from '../svg/pax.svg';
// import i from '../svg/pay.svg';
// import i from '../svg/piggy.svg';
// import i from '../svg/pink.svg';
// import i from '../svg/pivx.svg';
// import i from '../svg/plbt.svg';
// import i from '../svg/plr.svg';
// import i from '../svg/plu.svg';
// import i from '../svg/pot.svg';
// import i from '../svg/powr.svg';
// import i from '../svg/ppc.svg';
// import i from '../svg/ptoy.svg';
// import i from '../svg/pyn.svg';
// import i from '../svg/qcn.svg';
// import i from '../svg/qrk.svg';
// import i from '../svg/qtum.svg';
// import i from '../svg/r.svg';
// import i from '../svg/rads.svg';
// import i from '../svg/rbies.svg';
// import i from '../svg/rbt.svg';
// import i from '../svg/rby.svg';
// import i from '../svg/rcn.svg';
// import i from '../svg/rdd.svg';
// import i from '../svg/rep.svg';
// import i from '../svg/rhoc.svg';
// import i from '../svg/rise.svg';
// import i from '../svg/rlc.svg';
// import i from '../svg/rvn.svg';
// import i from '../svg/salt.svg';
// import i from '../svg/sar.svg';
// import i from '../svg/sbtc.svg';
// import i from '../svg/sc.svg';
// import i from '../svg/scot.svg';
// import i from '../svg/sdc.svg';
// import i from '../svg/sia.svg';
// import i from '../svg/sjcx.svg';
// import i from '../svg/slg.svg';
// import i from '../svg/sls.svg';
// import i from '../svg/smart.svg';
// import i from '../svg/sngls.svg';
// import i from '../svg/snm.svg';
// import i from '../svg/snrg.svg';
// import i from '../svg/snt.svg';
// import i from '../svg/srn.svg';
// import i from '../svg/start.svg';
// import i from '../svg/stash.svg';
// import i from '../svg/steem.svg';
// import i from '../svg/storj.svg';
// import i from '../svg/str.svg';
// import i from '../svg/strat.svg';
// import i from '../svg/stx.svg';
// import i from '../svg/swift.svg';
// import i from '../svg/swt.svg';
// import i from '../svg/sync.svg';
// import i from '../svg/synx.svg';
// import i from '../svg/sys.svg';
// import i from '../svg/time.svg';
// import i from '../svg/tip.svg';
// import i from '../svg/tix.svg';
// import i from '../svg/tkn.svg';
// import i from '../svg/trezor.svg';
// import i from '../svg/trig.svg';
// import i from '../svg/trst.svg';
// import i from '../svg/trx.svg';
// import i from '../svg/tusd.svg';
// import i from '../svg/tx.svg';
// import i from '../svg/ubq.svg';
// import i from '../svg/ukg.svg';
// import i from '../svg/und.svg';
// import i from '../svg/unity.svg';
// import i from '../svg/usd.svg';
// import i from '../svg/usdc.svg';
// import i from '../svg/usdt.svg';
// import i from '../svg/ven.svg';
// import i from '../svg/vera.svg';
// import i from '../svg/veri.svg';
// import i from '../svg/vet.svg';
// import i from '../svg/via.svg';
// import i from '../svg/vib.svg';
// import i from '../svg/vior.svg';
// import i from '../svg/viu.svg';
// import i from '../svg/vnl.svg';
// import i from '../svg/vpn.svg';
// import i from '../svg/vrc.svg';
// import i from '../svg/vtc.svg';
// import i from '../svg/vtho.svg';
// import i from '../svg/wan.svg';
// import i from '../svg/waves.svg';
// import i from '../svg/wax.svg';
// import i from '../svg/wings.svg';
// import i from '../svg/xai.svg';
// import i from '../svg/xaur.svg';
// import i from '../svg/xbs.svg';
// import i from '../svg/xcp.svg';
// import i from '../svg/xdn.svg';
// import i from '../svg/xel.svg';
// import i from '../svg/xem.svg';
// import i from '../svg/xlm.svg';
// import i from '../svg/xmr.svg';
// import i from '../svg/xnn.svg';
// import i from '../svg/xns.svg';
// import i from '../svg/xpm.svg';
// import i from '../svg/xrp.svg';
// import i from '../svg/xtz.svg';
// import i from '../svg/xvg.svg';
// import i from '../svg/xzc.svg';
// import i from '../svg/ybc.svg';
// import i from '../svg/yec.svg';
// import i from '../svg/zec.svg';
// import i from '../svg/zeit.svg';
// import i from '../svg/zen.svg';
// import i from '../svg/zil.svg';
// import i from '../svg/zrx.svg';

const icons: Record<string, React.FC> = {
    ['1st']: i1st,
    ['300']: i300,
    ['ada']: iada,
    ['adc']: iadc,
    ['adst']: iadst,
    ['adt']: iadt,
    ['adx']: iadx,
    ['ae']: iae,
    ['aeon']: iaeon,
    ['aidoc']: iaidoc,
    ['aion']: iaion,
    ['amis']: iamis,
    ['amp']: iamp,
    ['anc']: ianc,
    ['ankr']: iankr,
    ['ant']: iant,
    ['apis']: iapis,
    ['apt']: iapt,
    ['arc']: iarc,
    ['arch']: iarch,
    ['ardr']: iardr,
    ['ark']: iark,
    ['arn']: iarn,
    ['ath']: iath,
    ['atl']: iatl,
    ['atom']: iatom,
    ['aur']: iaur,
    ['awc']: iawc,
    ['aya']: iaya,
    ['banx']: ibanx,
    ['bat']: ibat,
    ['bay']: ibay,
    ['bc']: ibc,
    ['bch']: ibch,
    ['bchsv']: ibchsv,
    ['bcn']: ibcn,
    ['bft']: ibft,
    ['bnb']: ibnb,
    ['bnt']: ibnt,
    ['brd']: ibrd,
    ['brk']: ibrk,
    ['brx']: ibrx,
    ['bsd']: ibsd,
    ['bsv']: ibsv,
    ['bta']: ibta,
    ['btc']: ibtc,
    ['btcd']: ibtcd,
    ['btcp']: ibtcp,
    ['btg']: ibtg,
    ['bth']: ibth,
    ['btm']: ibtm,
    ['bts']: ibts,
    ['btu']: ibtu,
    ['busd']: ibusd,
    ['byts']: ibyts,
    ['cfi']: icfi,
    ['chz']: ichz,
    ['clam']: iclam,
    ['clo']: iclo,
    ['cloak']: icloak,
    ['cnd']: icnd,
    ['crm']: icrm,
    ['crpt']: icrpt,
    ['cvc']: icvc,
    ['dai']: idai,
    ['dao']: idao,
    ['dash']: idash,
    ['dcn']: idcn,
    ['dcr']: idcr,
    ['dct']: idct,
    ['dent']: ident,
    ['dgb']: idgb,
    ['dgd']: idgd,
    ['dgx']: idgx,
    ['dkk']: idkk,
    ['dmd']: idmd,
    ['dnt']: idnt,
    ['doge']: idoge,
    ['dsh']: idsh,
    ['ebst']: iebst,
    ['edg']: iedg,
    ['ela']: iela,
    ['elf']: ielf,
    ['ely']: iely,
    ['emc']: iemc,
    ['eng']: ieng,
    ['enj']: ienj,
    ['eos']: ieos,
    ['eosdt']: ieosdt,
    ['erc']: ierc,
    ['erd']: ierd,
    ['etc']: ietc,
    ['eth']: ieth,
    ['ethplo']: iethplo,
    ['eur']: ieur,
    ['eurs']: ieurs,
    ['exp']: iexp,
    ['fc2']: ifc2,
    ['fcn']: ifcn,
    ['fct']: ifct,
    ['fio']: ifio,
    ['flo']: iflo,
    ['frk']: ifrk,
    ['fsbt']: ifsbt,
    ['ftc']: iftc,
    ['ftm']: iftm,
    ['fun']: ifun,
    ['game']: igame,
    ['gbg']: igbg,
    ['gbp']: igbp,
    ['gbyte']: igbyte,
    ['gdc']: igdc,
    ['gemz']: igemz,
    ['gld']: igld,
    ['gno']: igno,
    ['gnt']: ignt,
    ['golos']: igolos,
    ['grc']: igrc,
    ['grs']: igrs,
    ['gup']: igup,
    ['gusd']: igusd,
    ['heat']: iheat,
    ['hex']: ihex,
    ['hmq']: ihmq,
    ['hot']: ihot,
    ['hsr']: ihsr,
    ['icn']: iicn,
    ['icx']: iicx,
    ['ifc']: iifc,
    ['incnt']: iincnt,
    ['ioc']: iioc,
    ['iost']: iiost,
    ['iotx']: iiotx,
    ['iq']: iiq,
    ['ixt']: iixt,
    ['jbs']: ijbs,
    ['job']: ijob,
    ['joys']: ijoys,
    // ['kcs']: i  ,
    // ['kin']: i  ,
    // ['kmd']: i  ,
    // ['knc']: i  ,
    // ['kore']: i  ,
    // ['lbc']: i  ,
    // ['ldoge']: i  ,
    // ['ledger']: i  ,
    // ['link']: i  ,
    // ['loki']: i  ,
    // ['loom']: i  ,
    // ['lrc']: i  ,
    // ['lsk']: i  ,
    // ['lst']: i  ,
    // ['ltc']: i  ,
    // ['lto']: i  ,
    // ['lun']: i  ,
    // ['maid']: i  ,
    // ['mana']: i  ,
    // ['mco']: i  ,
    // ['mer']: i  ,
    // ['mint']: i  ,
    // ['miota']: i  ,
    // ['mkr']: i  ,
    // ['mln']: i  ,
    // ['mona']: i  ,
    // ['mrc']: i  ,
    // ['msc']: i  ,
    // ['msp']: i  ,
    // ['mtl']: i  ,
    // ['mtr']: i  ,
    // ['mue']: i  ,
    // ['myst']: i  ,
    // ['nano']: i  ,
    // ['nas']: i  ,
    // ['nav']: i  ,
    // ['nbt']: i  ,
    // ['ncash']: i  ,
    // ['neo']: i  ,
    // ['neos']: i  ,
    // ['neu']: i  ,
    // ['ngc']: i  ,
    // ['nlg']: i  ,
    // ['nmc']: i  ,
    // ['nmr']: i  ,
    // ['note']: i  ,
    // ['now']: i  ,
    // ['npxs']: i  ,
    // ['nut']: i  ,
    // ['nvc']: i  ,
    // ['nxt']: i  ,
    // ['oax']: i  ,
    // ['ok']: i  ,
    // ['omg']: i  ,
    // ['omni']: i  ,
    // ['ong']: i  ,
    // ['ont']: i  ,
    // ['opal']: i  ,
    // ['part']: i  ,
    // ['pax']: i  ,
    // ['pay']: i  ,
    // ['piggy']: i  ,
    // ['pink']: i  ,
    // ['pivx']: i  ,
    // ['plbt']: i  ,
    // ['plr']: i  ,
    // ['plu']: i  ,
    // ['pot']: i  ,
    // ['powr']: i  ,
    // ['ppc']: i  ,
    // ['ptoy']: i  ,
    // ['pyn']: i  ,
    // ['qcn']: i  ,
    // ['qrk']: i  ,
    // ['qtum']: i  ,
    // ['r']: i  ,
    // ['rads']: i  ,
    // ['rbies']: i  ,
    // ['rbt']: i  ,
    // ['rby']: i  ,
    // ['rcn']: i  ,
    // ['rdd']: i  ,
    // ['rep']: i  ,
    // ['rhoc']: i  ,
    // ['rise']: i  ,
    // ['rlc']: i  ,
    // ['rvn']: i  ,
    // ['salt']: i  ,
    // ['sar']: i  ,
    // ['sbtc']: i  ,
    // ['sc']: i  ,
    // ['scot']: i  ,
    // ['sdc']: i  ,
    // ['sia']: i  ,
    // ['sjcx']: i  ,
    // ['slg']: i  ,
    // ['sls']: i  ,
    // ['smart']: i  ,
    // ['sngls']: i  ,
    // ['snm']: i  ,
    // ['snrg']: i  ,
    // ['snt']: i  ,
    // ['srn']: i  ,
    // ['start']: i  ,
    // ['stash']: i  ,
    // ['steem']: i  ,
    // ['storj']: i  ,
    // ['str']: i  ,
    // ['strat']: i  ,
    // ['stx']: i  ,
    // ['swift']: i  ,
    // ['swt']: i  ,
    // ['sync']: i  ,
    // ['synx']: i  ,
    // ['sys']: i  ,
    // ['time']: i  ,
    // ['tip']: i  ,
    // ['tix']: i  ,
    // ['tkn']: i  ,
    // ['trezor']: i  ,
    // ['trig']: i  ,
    // ['trst']: i  ,
    // ['trx']: i  ,
    // ['tusd']: i  ,
    // ['tx']: i  ,
    // ['ubq']: i  ,
    // ['ukg']: i  ,
    // ['und']: i  ,
    // ['unity']: i  ,
    // ['usd']: i  ,
    // ['usdc']: i  ,
    // ['usdt']: i  ,
    // ['ven']: i  ,
    // ['vera']: i  ,
    // ['veri']: i  ,
    // ['vet']: i  ,
    // ['via']: i  ,
    // ['vib']: i  ,
    // ['vior']: i  ,
    // ['viu']: i  ,
    // ['vnl']: i  ,
    // ['vpn']: i  ,
    // ['vrc']: i  ,
    // ['vtc']: i  ,
    // ['vtho']: i  ,
    // ['wan']: i  ,
    // ['waves']: i  ,
    // ['wax']: i  ,
    // ['wings']: i  ,
    // ['xai']: i  ,
    // ['xaur']: i  ,
    // ['xbs']: i  ,
    // ['xcp']: i  ,
    // ['xdn']: i  ,
    // ['xel']: i  ,
    // ['xem']: i  ,
    // ['xlm']: i  ,
    // ['xmr']: i  ,
    // ['xnn']: i  ,
    // ['xns']: i  ,
    // ['xpm']: i  ,
    // ['xrp']: i  ,
    // ['xtz']: i  ,
    // ['xvg']: i  ,
    // ['xzc']: i  ,
    // ['ybc']: i  ,
    // ['yec']: i  ,
    // ['zec']: i  ,
    // ['zeit']: i  ,
    // ['zen']: i  ,
    // ['zil']: i  ,
    // ['zrx']: i  ,
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
