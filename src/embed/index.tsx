import React, { SVGAttributes, useMemo } from 'react';

import { CoinIconName } from '../interfaces';
// Icons:
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
import oax from '../svg/oax.svg';
import ok from '../svg/ok.svg';
import omg from '../svg/omg.svg';
import omni from '../svg/omni.svg';
import ong from '../svg/ong.svg';
import ont from '../svg/ont.svg';
import opal from '../svg/opal.svg';
import part from '../svg/part.svg';
import pax from '../svg/pax.svg';
import pay from '../svg/pay.svg';
import piggy from '../svg/piggy.svg';
import pink from '../svg/pink.svg';
import pivx from '../svg/pivx.svg';
import plbt from '../svg/plbt.svg';
import plr from '../svg/plr.svg';
import plu from '../svg/plu.svg';
import pot from '../svg/pot.svg';
import powr from '../svg/powr.svg';
import ppc from '../svg/ppc.svg';
import ptoy from '../svg/ptoy.svg';
import pyn from '../svg/pyn.svg';
import qcn from '../svg/qcn.svg';
import qrk from '../svg/qrk.svg';
import qtum from '../svg/qtum.svg';
import r from '../svg/r.svg';
import rads from '../svg/rads.svg';
import rbies from '../svg/rbies.svg';
import rbt from '../svg/rbt.svg';
import rby from '../svg/rby.svg';
import rcn from '../svg/rcn.svg';
import rdd from '../svg/rdd.svg';
import rep from '../svg/rep.svg';
import rhoc from '../svg/rhoc.svg';
import rise from '../svg/rise.svg';
import rlc from '../svg/rlc.svg';
import rvn from '../svg/rvn.svg';
import salt from '../svg/salt.svg';
import sar from '../svg/sar.svg';
import sbtc from '../svg/sbtc.svg';
import sc from '../svg/sc.svg';
import scot from '../svg/scot.svg';
import sdc from '../svg/sdc.svg';
import sia from '../svg/sia.svg';
import sjcx from '../svg/sjcx.svg';
import slg from '../svg/slg.svg';
import sls from '../svg/sls.svg';
import smart from '../svg/smart.svg';
import sngls from '../svg/sngls.svg';
import snm from '../svg/snm.svg';
import snrg from '../svg/snrg.svg';
import snt from '../svg/snt.svg';
import srn from '../svg/srn.svg';
import start from '../svg/start.svg';
import stash from '../svg/stash.svg';
import steem from '../svg/steem.svg';
import storj from '../svg/storj.svg';
import str from '../svg/str.svg';
import strat from '../svg/strat.svg';
import stx from '../svg/stx.svg';
import swift from '../svg/swift.svg';
import swt from '../svg/swt.svg';
import sync from '../svg/sync.svg';
import synx from '../svg/synx.svg';
import sys from '../svg/sys.svg';
import time from '../svg/time.svg';
import tip from '../svg/tip.svg';
import tix from '../svg/tix.svg';
import tkn from '../svg/tkn.svg';
import trezor from '../svg/trezor.svg';
import trig from '../svg/trig.svg';
import trst from '../svg/trst.svg';
import trx from '../svg/trx.svg';
import tusd from '../svg/tusd.svg';
import tx from '../svg/tx.svg';
import ubq from '../svg/ubq.svg';
import ukg from '../svg/ukg.svg';
import und from '../svg/und.svg';
import unity from '../svg/unity.svg';
import usd from '../svg/usd.svg';
import usdc from '../svg/usdc.svg';
import usdt from '../svg/usdt.svg';
import ven from '../svg/ven.svg';
import vera from '../svg/vera.svg';
import veri from '../svg/veri.svg';
import vet from '../svg/vet.svg';
import via from '../svg/via.svg';
import vib from '../svg/vib.svg';
import vior from '../svg/vior.svg';
import viu from '../svg/viu.svg';
import vnl from '../svg/vnl.svg';
import vpn from '../svg/vpn.svg';
import vrc from '../svg/vrc.svg';
import vtc from '../svg/vtc.svg';
import vtho from '../svg/vtho.svg';
import wan from '../svg/wan.svg';
import waves from '../svg/waves.svg';
import wax from '../svg/wax.svg';
import wings from '../svg/wings.svg';
import xai from '../svg/xai.svg';
import xaur from '../svg/xaur.svg';
import xbs from '../svg/xbs.svg';
import xcp from '../svg/xcp.svg';
import xdn from '../svg/xdn.svg';
import xel from '../svg/xel.svg';
import xem from '../svg/xem.svg';
import xlm from '../svg/xlm.svg';
import xmr from '../svg/xmr.svg';
import xnn from '../svg/xnn.svg';
import xns from '../svg/xns.svg';
import xpm from '../svg/xpm.svg';
import xrp from '../svg/xrp.svg';
import xtz from '../svg/xtz.svg';
import xvg from '../svg/xvg.svg';
import xzc from '../svg/xzc.svg';
import ybc from '../svg/ybc.svg';
import yec from '../svg/yec.svg';
import zec from '../svg/zec.svg';
import zeit from '../svg/zeit.svg';
import zen from '../svg/zen.svg';
import zil from '../svg/zil.svg';
import zrx from '../svg/zrx.svg';

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
    ['oax']: oax,
    ['ok']: ok,
    ['omg']: omg,
    ['omni']: omni,
    ['ong']: ong,
    ['ont']: ont,
    ['opal']: opal,
    ['part']: part,
    ['pax']: pax,
    ['pay']: pay,
    ['piggy']: piggy,
    ['pink']: pink,
    ['pivx']: pivx,
    ['plbt']: plbt,
    ['plr']: plr,
    ['plu']: plu,
    ['pot']: pot,
    ['powr']: powr,
    ['ppc']: ppc,
    ['ptoy']: ptoy,
    ['pyn']: pyn,
    ['qcn']: qcn,
    ['qrk']: qrk,
    ['qtum']: qtum,
    ['r']: r,
    ['rads']: rads,
    ['rbies']: rbies,
    ['rbt']: rbt,
    ['rby']: rby,
    ['rcn']: rcn,
    ['rdd']: rdd,
    ['rep']: rep,
    ['rhoc']: rhoc,
    ['rise']: rise,
    ['rlc']: rlc,
    ['rvn']: rvn,
    ['salt']: salt,
    ['sar']: sar,
    ['sbtc']: sbtc,
    ['sc']: sc,
    ['scot']: scot,
    ['sdc']: sdc,
    ['sia']: sia,
    ['sjcx']: sjcx,
    ['slg']: slg,
    ['sls']: sls,
    ['smart']: smart,
    ['sngls']: sngls,
    ['snm']: snm,
    ['snrg']: snrg,
    ['snt']: snt,
    ['srn']: srn,
    ['start']: start,
    ['stash']: stash,
    ['steem']: steem,
    ['storj']: storj,
    ['str']: str,
    ['strat']: strat,
    ['stx']: stx,
    ['swift']: swift,
    ['swt']: swt,
    ['sync']: sync,
    ['synx']: synx,
    ['sys']: sys,
    ['time']: time,
    ['tip']: tip,
    ['tix']: tix,
    ['tkn']: tkn,
    ['trezor']: trezor,
    ['trig']: trig,
    ['trst']: trst,
    ['trx']: trx,
    ['tusd']: tusd,
    ['tx']: tx,
    ['ubq']: ubq,
    ['ukg']: ukg,
    ['und']: und,
    ['unity']: unity,
    ['usd']: usd,
    ['usdc']: usdc,
    ['usdt']: usdt,
    ['ven']: ven,
    ['vera']: vera,
    ['veri']: veri,
    ['vet']: vet,
    ['via']: via,
    ['vib']: vib,
    ['vior']: vior,
    ['viu']: viu,
    ['vnl']: vnl,
    ['vpn']: vpn,
    ['vrc']: vrc,
    ['vtc']: vtc,
    ['vtho']: vtho,
    ['wan']: wan,
    ['waves']: waves,
    ['wax']: wax,
    ['wings']: wings,
    ['xai']: xai,
    ['xaur']: xaur,
    ['xbs']: xbs,
    ['xcp']: xcp,
    ['xdn']: xdn,
    ['xel']: xel,
    ['xem']: xem,
    ['xlm']: xlm,
    ['xmr']: xmr,
    ['xnn']: xnn,
    ['xns']: xns,
    ['xpm']: xpm,
    ['xrp']: xrp,
    ['xtz']: xtz,
    ['xvg']: xvg,
    ['xzc']: xzc,
    ['ybc']: ybc,
    ['yec']: yec,
    ['zec']: zec,
    ['zeit']: zeit,
    ['zen']: zen,
    ['zil']: zil,
    ['zrx']: zrx,
};

interface Props extends SVGAttributes<any> {
    name: CoinIconName;
}

export const EmbedIcon: React.FC<Props> = ({ name, style, ...props }) => {
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
