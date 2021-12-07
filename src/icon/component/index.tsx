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
// import i from '../svg/banx.svg';
// import i from '../svg/bat.svg';
// import i from '../svg/bay.svg';
// import i from '../svg/bc.svg';
// import i from '../svg/bch.svg';
// import i from '../svg/bchsv.svg';
// import i from '../svg/bcn.svg';
// import i from '../svg/bft.svg';
// import i from '../svg/bnb.svg';
// import i from '../svg/bnt.svg';
// import i from '../svg/brd.svg';
// import i from '../svg/brk.svg';
// import i from '../svg/brx.svg';
// import i from '../svg/bsd.svg';
// import i from '../svg/bsv.svg';
// import i from '../svg/bta.svg';
// import i from '../svg/btc.svg';
// import i from '../svg/btcd.svg';
// import i from '../svg/btcp.svg';
// import i from '../svg/btg.svg';
// import i from '../svg/bth.svg';
// import i from '../svg/btm.svg';
// import i from '../svg/bts.svg';
// import i from '../svg/btu.svg';
// import i from '../svg/busd.svg';
// import i from '../svg/byts.svg';
// import i from '../svg/cfi.svg';
// import i from '../svg/chz.svg';
// import i from '../svg/clam.svg';
// import i from '../svg/clo.svg';
// import i from '../svg/cloak.svg';
// import i from '../svg/cnd.svg';
// import i from '../svg/crm.svg';
// import i from '../svg/crpt.svg';
// import i from '../svg/cvc.svg';
// import i from '../svg/dai.svg';
// import i from '../svg/dao.svg';
// import i from '../svg/dash.svg';
// import i from '../svg/dcn.svg';
// import i from '../svg/dcr.svg';
// import i from '../svg/dct.svg';
// import i from '../svg/dent.svg';
// import i from '../svg/dgb.svg';
// import i from '../svg/dgd.svg';
// import i from '../svg/dgx.svg';
// import i from '../svg/dkk.svg';
// import i from '../svg/dmd.svg';
// import i from '../svg/dnt.svg';
// import i from '../svg/doge.svg';
// import i from '../svg/dsh.svg';
// import i from '../svg/ebst.svg';
// import i from '../svg/edg.svg';
// import i from '../svg/ela.svg';
// import i from '../svg/elf.svg';
// import i from '../svg/ely.svg';
// import i from '../svg/emc.svg';
// import i from '../svg/eng.svg';
// import i from '../svg/enj.svg';
// import i from '../svg/eos.svg';
// import i from '../svg/eosdt.svg';
// import i from '../svg/erc.svg';
// import i from '../svg/erd.svg';
// import i from '../svg/etc.svg';
// import i from '../svg/eth.svg';
// import i from '../svg/ethplo.svg';
// import i from '../svg/eur.svg';
// import i from '../svg/eurs.svg';
// import i from '../svg/exp.svg';
// import i from '../svg/fc2.svg';
// import i from '../svg/fcn.svg';
// import i from '../svg/fct.svg';
// import i from '../svg/fio.svg';
// import i from '../svg/flo.svg';
// import i from '../svg/frk.svg';
// import i from '../svg/fsbt.svg';
// import i from '../svg/ftc.svg';
// import i from '../svg/ftm.svg';
// import i from '../svg/fun.svg';
// import i from '../svg/game.svg';
// import i from '../svg/gbg.svg';
// import i from '../svg/gbp.svg';
// import i from '../svg/gbyte.svg';
// import i from '../svg/gdc.svg';
// import i from '../svg/gemz.svg';
// import i from '../svg/gld.svg';
// import i from '../svg/gno.svg';
// import i from '../svg/gnt.svg';
// import i from '../svg/golos.svg';
// import i from '../svg/grc.svg';
// import i from '../svg/grs.svg';
// import i from '../svg/gup.svg';
// import i from '../svg/gusd.svg';
// import i from '../svg/heat.svg';
// import i from '../svg/hex.svg';
// import i from '../svg/hmq.svg';
// import i from '../svg/hot.svg';
// import i from '../svg/hsr.svg';
// import i from '../svg/icn.svg';
// import i from '../svg/icx.svg';
// import i from '../svg/ifc.svg';
// import i from '../svg/incnt.svg';
// import i from '../svg/ioc.svg';
// import i from '../svg/iost.svg';
// import i from '../svg/iotx.svg';
// import i from '../svg/iq.svg';
// import i from '../svg/ixt.svg';
// import i from '../svg/jbs.svg';
// import i from '../svg/job.svg';
// import i from '../svg/joys.svg';
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
    // ['banx']: Icon,
    // ['bat']: Icon,
    // ['bay']: Icon,
    // ['bc']: Icon,
    // ['bch']: Icon,
    // ['bchsv']: Icon,
    // ['bcn']: Icon,
    // ['bft']: Icon,
    // ['bnb']: Icon,
    // ['bnt']: Icon,
    // ['brd']: Icon,
    // ['brk']: Icon,
    // ['brx']: Icon,
    // ['bsd']: Icon,
    // ['bsv']: Icon,
    // ['bta']: Icon,
    // ['btc']: Icon,
    // ['btcd']: Icon,
    // ['btcp']: Icon,
    // ['btg']: Icon,
    // ['bth']: Icon,
    // ['btm']: Icon,
    // ['bts']: Icon,
    // ['btu']: Icon,
    // ['busd']: Icon,
    // ['byts']: Icon,
    // ['cfi']: Icon,
    // ['chz']: Icon,
    // ['clam']: Icon,
    // ['clo']: Icon,
    // ['cloak']: Icon,
    // ['cnd']: Icon,
    // ['crm']: Icon,
    // ['crpt']: Icon,
    // ['cvc']: Icon,
    // ['dai']: Icon,
    // ['dao']: Icon,
    // ['dash']: Icon,
    // ['dcn']: Icon,
    // ['dcr']: Icon,
    // ['dct']: Icon,
    // ['dent']: Icon,
    // ['dgb']: Icon,
    // ['dgd']: Icon,
    // ['dgx']: Icon,
    // ['dkk']: Icon,
    // ['dmd']: Icon,
    // ['dnt']: Icon,
    // ['doge']: Icon,
    // ['dsh']: Icon,
    // ['ebst']: Icon,
    // ['edg']: Icon,
    // ['ela']: Icon,
    // ['elf']: Icon,
    // ['ely']: Icon,
    // ['emc']: Icon,
    // ['eng']: Icon,
    // ['enj']: Icon,
    // ['eos']: Icon,
    // ['eosdt']: Icon,
    // ['erc']: Icon,
    // ['erd']: Icon,
    // ['etc']: Icon,
    // ['eth']: Icon,
    // ['ethplo']: Icon,
    // ['eur']: Icon,
    // ['eurs']: Icon,
    // ['exp']: Icon,
    // ['fc2']: Icon,
    // ['fcn']: Icon,
    // ['fct']: Icon,
    // ['fio']: Icon,
    // ['flo']: Icon,
    // ['frk']: Icon,
    // ['fsbt']: Icon,
    // ['ftc']: Icon,
    // ['ftm']: Icon,
    // ['fun']: Icon,
    // ['game']: Icon,
    // ['gbg']: Icon,
    // ['gbp']: Icon,
    // ['gbyte']: Icon,
    // ['gdc']: Icon,
    // ['gemz']: Icon,
    // ['gld']: Icon,
    // ['gno']: Icon,
    // ['gnt']: Icon,
    // ['golos']: Icon,
    // ['grc']: Icon,
    // ['grs']: Icon,
    // ['gup']: Icon,
    // ['gusd']: Icon,
    // ['heat']: Icon,
    // ['hex']: Icon,
    // ['hmq']: Icon,
    // ['hot']: Icon,
    // ['hsr']: Icon,
    // ['icn']: Icon,
    // ['icx']: Icon,
    // ['ifc']: Icon,
    // ['incnt']: Icon,
    // ['ioc']: Icon,
    // ['iost']: Icon,
    // ['iotx']: Icon,
    // ['iq']: Icon,
    // ['ixt']: Icon,
    // ['jbs']: Icon,
    // ['job']: Icon,
    // ['joys']: Icon,
    // ['kcs']: Icon,
    // ['kin']: Icon,
    // ['kmd']: Icon,
    // ['knc']: Icon,
    // ['kore']: Icon,
    // ['lbc']: Icon,
    // ['ldoge']: Icon,
    // ['ledger']: Icon,
    // ['link']: Icon,
    // ['loki']: Icon,
    // ['loom']: Icon,
    // ['lrc']: Icon,
    // ['lsk']: Icon,
    // ['lst']: Icon,
    // ['ltc']: Icon,
    // ['lto']: Icon,
    // ['lun']: Icon,
    // ['maid']: Icon,
    // ['mana']: Icon,
    // ['mco']: Icon,
    // ['mer']: Icon,
    // ['mint']: Icon,
    // ['miota']: Icon,
    // ['mkr']: Icon,
    // ['mln']: Icon,
    // ['mona']: Icon,
    // ['mrc']: Icon,
    // ['msc']: Icon,
    // ['msp']: Icon,
    // ['mtl']: Icon,
    // ['mtr']: Icon,
    // ['mue']: Icon,
    // ['myst']: Icon,
    // ['nano']: Icon,
    // ['nas']: Icon,
    // ['nav']: Icon,
    // ['nbt']: Icon,
    // ['ncash']: Icon,
    // ['neo']: Icon,
    // ['neos']: Icon,
    // ['neu']: Icon,
    // ['ngc']: Icon,
    // ['nlg']: Icon,
    // ['nmc']: Icon,
    // ['nmr']: Icon,
    // ['note']: Icon,
    // ['now']: Icon,
    // ['npxs']: Icon,
    // ['nut']: Icon,
    // ['nvc']: Icon,
    // ['nxt']: Icon,
    // ['oax']: Icon,
    // ['ok']: Icon,
    // ['omg']: Icon,
    // ['omni']: Icon,
    // ['ong']: Icon,
    // ['ont']: Icon,
    // ['opal']: Icon,
    // ['part']: Icon,
    // ['pax']: Icon,
    // ['pay']: Icon,
    // ['piggy']: Icon,
    // ['pink']: Icon,
    // ['pivx']: Icon,
    // ['plbt']: Icon,
    // ['plr']: Icon,
    // ['plu']: Icon,
    // ['pot']: Icon,
    // ['powr']: Icon,
    // ['ppc']: Icon,
    // ['ptoy']: Icon,
    // ['pyn']: Icon,
    // ['qcn']: Icon,
    // ['qrk']: Icon,
    // ['qtum']: Icon,
    // ['r']: Icon,
    // ['rads']: Icon,
    // ['rbies']: Icon,
    // ['rbt']: Icon,
    // ['rby']: Icon,
    // ['rcn']: Icon,
    // ['rdd']: Icon,
    // ['rep']: Icon,
    // ['rhoc']: Icon,
    // ['rise']: Icon,
    // ['rlc']: Icon,
    // ['rvn']: Icon,
    // ['salt']: Icon,
    // ['sar']: Icon,
    // ['sbtc']: Icon,
    // ['sc']: Icon,
    // ['scot']: Icon,
    // ['sdc']: Icon,
    // ['sia']: Icon,
    // ['sjcx']: Icon,
    // ['slg']: Icon,
    // ['sls']: Icon,
    // ['smart']: Icon,
    // ['sngls']: Icon,
    // ['snm']: Icon,
    // ['snrg']: Icon,
    // ['snt']: Icon,
    // ['srn']: Icon,
    // ['start']: Icon,
    // ['stash']: Icon,
    // ['steem']: Icon,
    // ['storj']: Icon,
    // ['str']: Icon,
    // ['strat']: Icon,
    // ['stx']: Icon,
    // ['swift']: Icon,
    // ['swt']: Icon,
    // ['sync']: Icon,
    // ['synx']: Icon,
    // ['sys']: Icon,
    // ['time']: Icon,
    // ['tip']: Icon,
    // ['tix']: Icon,
    // ['tkn']: Icon,
    // ['trezor']: Icon,
    // ['trig']: Icon,
    // ['trst']: Icon,
    // ['trx']: Icon,
    // ['tusd']: Icon,
    // ['tx']: Icon,
    // ['ubq']: Icon,
    // ['ukg']: Icon,
    // ['und']: Icon,
    // ['unity']: Icon,
    // ['usd']: Icon,
    // ['usdc']: Icon,
    // ['usdt']: Icon,
    // ['ven']: Icon,
    // ['vera']: Icon,
    // ['veri']: Icon,
    // ['vet']: Icon,
    // ['via']: Icon,
    // ['vib']: Icon,
    // ['vior']: Icon,
    // ['viu']: Icon,
    // ['vnl']: Icon,
    // ['vpn']: Icon,
    // ['vrc']: Icon,
    // ['vtc']: Icon,
    // ['vtho']: Icon,
    // ['wan']: Icon,
    // ['waves']: Icon,
    // ['wax']: Icon,
    // ['wings']: Icon,
    // ['xai']: Icon,
    // ['xaur']: Icon,
    // ['xbs']: Icon,
    // ['xcp']: Icon,
    // ['xdn']: Icon,
    // ['xel']: Icon,
    // ['xem']: Icon,
    // ['xlm']: Icon,
    // ['xmr']: Icon,
    // ['xnn']: Icon,
    // ['xns']: Icon,
    // ['xpm']: Icon,
    // ['xrp']: Icon,
    // ['xtz']: Icon,
    // ['xvg']: Icon,
    // ['xzc']: Icon,
    // ['ybc']: Icon,
    // ['yec']: Icon,
    // ['zec']: Icon,
    // ['zeit']: Icon,
    // ['zen']: Icon,
    // ['zil']: Icon,
    // ['zrx']: Icon,
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
