import React, { SVGAttributes, useMemo } from 'react';

import { CoinIconCode } from '../interfaces';
// Icons:
import i1st from '../../svg/simple/1st.svg';
import i300 from '../../svg/simple/300.svg';
import ada from '../../svg/simple/ada.svg';
import adc from '../../svg/simple/adc.svg';
import adst from '../../svg/simple/adst.svg';
import adt from '../../svg/simple/adt.svg';
import adx from '../../svg/simple/adx.svg';
import ae from '../../svg/simple/ae.svg';
import aeon from '../../svg/simple/aeon.svg';
import aidoc from '../../svg/simple/aidoc.svg';
import aion from '../../svg/simple/aion.svg';
import amis from '../../svg/simple/amis.svg';
import amp from '../../svg/simple/amp.svg';
import anc from '../../svg/simple/anc.svg';
import ankr from '../../svg/simple/ankr.svg';
import ant from '../../svg/simple/ant.svg';
import apis from '../../svg/simple/apis.svg';
import apt from '../../svg/simple/apt.svg';
import arc from '../../svg/simple/arc.svg';
import arch from '../../svg/simple/arch.svg';
import ardr from '../../svg/simple/ardr.svg';
import ark from '../../svg/simple/ark.svg';
import arn from '../../svg/simple/arn.svg';
import ath from '../../svg/simple/ath.svg';
import atl from '../../svg/simple/atl.svg';
import atom from '../../svg/simple/atom.svg';
import aur from '../../svg/simple/aur.svg';
import awc from '../../svg/simple/awc.svg';
import aya from '../../svg/simple/aya.svg';
import banx from '../../svg/simple/banx.svg';
import bat from '../../svg/simple/bat.svg';
import bay from '../../svg/simple/bay.svg';
import bc from '../../svg/simple/bc.svg';
import bch from '../../svg/simple/bch.svg';
import bchsv from '../../svg/simple/bchsv.svg';
import bcn from '../../svg/simple/bcn.svg';
import bft from '../../svg/simple/bft.svg';
import bnb from '../../svg/simple/bnb.svg';
import bnt from '../../svg/simple/bnt.svg';
import brd from '../../svg/simple/brd.svg';
import brk from '../../svg/simple/brk.svg';
import brx from '../../svg/simple/brx.svg';
import bsd from '../../svg/simple/bsd.svg';
import bsv from '../../svg/simple/bsv.svg';
import bta from '../../svg/simple/bta.svg';
import btc from '../../svg/simple/btc.svg';
import btcd from '../../svg/simple/btcd.svg';
import btcp from '../../svg/simple/btcp.svg';
import btg from '../../svg/simple/btg.svg';
import bth from '../../svg/simple/bth.svg';
import btm from '../../svg/simple/btm.svg';
import bts from '../../svg/simple/bts.svg';
import btu from '../../svg/simple/btu.svg';
import busd from '../../svg/simple/busd.svg';
import byts from '../../svg/simple/byts.svg';
import cfi from '../../svg/simple/cfi.svg';
import chz from '../../svg/simple/chz.svg';
import clam from '../../svg/simple/clam.svg';
import clo from '../../svg/simple/clo.svg';
import cloak from '../../svg/simple/cloak.svg';
import cnd from '../../svg/simple/cnd.svg';
import crm from '../../svg/simple/crm.svg';
import crpt from '../../svg/simple/crpt.svg';
import cvc from '../../svg/simple/cvc.svg';
import dai from '../../svg/simple/dai.svg';
import dao from '../../svg/simple/dao.svg';
import dash from '../../svg/simple/dash.svg';
import dcn from '../../svg/simple/dcn.svg';
import dcr from '../../svg/simple/dcr.svg';
import dct from '../../svg/simple/dct.svg';
import dent from '../../svg/simple/dent.svg';
import dgb from '../../svg/simple/dgb.svg';
import dgd from '../../svg/simple/dgd.svg';
import dgx from '../../svg/simple/dgx.svg';
import dkk from '../../svg/simple/dkk.svg';
import dmd from '../../svg/simple/dmd.svg';
import dnt from '../../svg/simple/dnt.svg';
import doge from '../../svg/simple/doge.svg';
import dsh from '../../svg/simple/dsh.svg';
import ebst from '../../svg/simple/ebst.svg';
import edg from '../../svg/simple/edg.svg';
import ela from '../../svg/simple/ela.svg';
import elf from '../../svg/simple/elf.svg';
import ely from '../../svg/simple/ely.svg';
import emc from '../../svg/simple/emc.svg';
import eng from '../../svg/simple/eng.svg';
import enj from '../../svg/simple/enj.svg';
import eos from '../../svg/simple/eos.svg';
import eosdt from '../../svg/simple/eosdt.svg';
import erc from '../../svg/simple/erc.svg';
import erd from '../../svg/simple/erd.svg';
import etc from '../../svg/simple/etc.svg';
import eth from '../../svg/simple/eth.svg';
import ethplo from '../../svg/simple/ethplo.svg';
import eur from '../../svg/simple/eur.svg';
import eurs from '../../svg/simple/eurs.svg';
import exp from '../../svg/simple/exp.svg';
import fc2 from '../../svg/simple/fc2.svg';
import fcn from '../../svg/simple/fcn.svg';
import fct from '../../svg/simple/fct.svg';
import fio from '../../svg/simple/fio.svg';
import flo from '../../svg/simple/flo.svg';
import frk from '../../svg/simple/frk.svg';
import fsbt from '../../svg/simple/fsbt.svg';
import ftc from '../../svg/simple/ftc.svg';
import ftm from '../../svg/simple/ftm.svg';
import fun from '../../svg/simple/fun.svg';
import game from '../../svg/simple/game.svg';
import gbg from '../../svg/simple/gbg.svg';
import gbp from '../../svg/simple/gbp.svg';
import gbyte from '../../svg/simple/gbyte.svg';
import gdc from '../../svg/simple/gdc.svg';
import gemz from '../../svg/simple/gemz.svg';
import gld from '../../svg/simple/gld.svg';
import gno from '../../svg/simple/gno.svg';
import gnt from '../../svg/simple/gnt.svg';
import golos from '../../svg/simple/golos.svg';
import grc from '../../svg/simple/grc.svg';
import grs from '../../svg/simple/grs.svg';
import gup from '../../svg/simple/gup.svg';
import gusd from '../../svg/simple/gusd.svg';
import heat from '../../svg/simple/heat.svg';
import hex from '../../svg/simple/hex.svg';
import hmq from '../../svg/simple/hmq.svg';
import hot from '../../svg/simple/hot.svg';
import hsr from '../../svg/simple/hsr.svg';
import icn from '../../svg/simple/icn.svg';
import icx from '../../svg/simple/icx.svg';
import ifc from '../../svg/simple/ifc.svg';
import incnt from '../../svg/simple/incnt.svg';
import ioc from '../../svg/simple/ioc.svg';
import iost from '../../svg/simple/iost.svg';
import iotx from '../../svg/simple/iotx.svg';
import iq from '../../svg/simple/iq.svg';
import ixt from '../../svg/simple/ixt.svg';
import jbs from '../../svg/simple/jbs.svg';
import job from '../../svg/simple/job.svg';
import joys from '../../svg/simple/joys.svg';
import kcs from '../../svg/simple/kcs.svg';
import kin from '../../svg/simple/kin.svg';
import kmd from '../../svg/simple/kmd.svg';
import knc from '../../svg/simple/knc.svg';
import kore from '../../svg/simple/kore.svg';
import lbc from '../../svg/simple/lbc.svg';
import ldoge from '../../svg/simple/ldoge.svg';
import ledger from '../../svg/simple/ledger.svg';
import link from '../../svg/simple/link.svg';
import loki from '../../svg/simple/loki.svg';
import loom from '../../svg/simple/loom.svg';
import lrc from '../../svg/simple/lrc.svg';
import lsk from '../../svg/simple/lsk.svg';
import lst from '../../svg/simple/lst.svg';
import ltc from '../../svg/simple/ltc.svg';
import lto from '../../svg/simple/lto.svg';
import lun from '../../svg/simple/lun.svg';
import maid from '../../svg/simple/maid.svg';
import mana from '../../svg/simple/mana.svg';
import mco from '../../svg/simple/mco.svg';
import mer from '../../svg/simple/mer.svg';
import mint from '../../svg/simple/mint.svg';
import miota from '../../svg/simple/miota.svg';
import mkr from '../../svg/simple/mkr.svg';
import mln from '../../svg/simple/mln.svg';
import mona from '../../svg/simple/mona.svg';
import mrc from '../../svg/simple/mrc.svg';
import msc from '../../svg/simple/msc.svg';
import msp from '../../svg/simple/msp.svg';
import mtl from '../../svg/simple/mtl.svg';
import mtr from '../../svg/simple/mtr.svg';
import mue from '../../svg/simple/mue.svg';
import myst from '../../svg/simple/myst.svg';
import nano from '../../svg/simple/nano.svg';
import nas from '../../svg/simple/nas.svg';
import nav from '../../svg/simple/nav.svg';
import nbt from '../../svg/simple/nbt.svg';
import ncash from '../../svg/simple/ncash.svg';
import neo from '../../svg/simple/neo.svg';
import neos from '../../svg/simple/neos.svg';
import neu from '../../svg/simple/neu.svg';
import ngc from '../../svg/simple/ngc.svg';
import nlg from '../../svg/simple/nlg.svg';
import nmc from '../../svg/simple/nmc.svg';
import nmr from '../../svg/simple/nmr.svg';
import note from '../../svg/simple/note.svg';
import now from '../../svg/simple/now.svg';
import npxs from '../../svg/simple/npxs.svg';
import nut from '../../svg/simple/nut.svg';
import nvc from '../../svg/simple/nvc.svg';
import nxt from '../../svg/simple/nxt.svg';
import oax from '../../svg/simple/oax.svg';
import ok from '../../svg/simple/ok.svg';
import omg from '../../svg/simple/omg.svg';
import omni from '../../svg/simple/omni.svg';
import ong from '../../svg/simple/ong.svg';
import ont from '../../svg/simple/ont.svg';
import opal from '../../svg/simple/opal.svg';
import part from '../../svg/simple/part.svg';
import pax from '../../svg/simple/pax.svg';
import pay from '../../svg/simple/pay.svg';
import piggy from '../../svg/simple/piggy.svg';
import pink from '../../svg/simple/pink.svg';
import pivx from '../../svg/simple/pivx.svg';
import plbt from '../../svg/simple/plbt.svg';
import plr from '../../svg/simple/plr.svg';
import plu from '../../svg/simple/plu.svg';
import pot from '../../svg/simple/pot.svg';
import powr from '../../svg/simple/powr.svg';
import ppc from '../../svg/simple/ppc.svg';
import ptoy from '../../svg/simple/ptoy.svg';
import pyn from '../../svg/simple/pyn.svg';
import qcn from '../../svg/simple/qcn.svg';
import qrk from '../../svg/simple/qrk.svg';
import qtum from '../../svg/simple/qtum.svg';
import r from '../../svg/simple/r.svg';
import rads from '../../svg/simple/rads.svg';
import rbies from '../../svg/simple/rbies.svg';
import rbt from '../../svg/simple/rbt.svg';
import rby from '../../svg/simple/rby.svg';
import rcn from '../../svg/simple/rcn.svg';
import rdd from '../../svg/simple/rdd.svg';
import rep from '../../svg/simple/rep.svg';
import rhoc from '../../svg/simple/rhoc.svg';
import rise from '../../svg/simple/rise.svg';
import rlc from '../../svg/simple/rlc.svg';
import rvn from '../../svg/simple/rvn.svg';
import salt from '../../svg/simple/salt.svg';
import sar from '../../svg/simple/sar.svg';
import sbtc from '../../svg/simple/sbtc.svg';
import sc from '../../svg/simple/sc.svg';
import scot from '../../svg/simple/scot.svg';
import sdc from '../../svg/simple/sdc.svg';
import sia from '../../svg/simple/sia.svg';
import sjcx from '../../svg/simple/sjcx.svg';
import slg from '../../svg/simple/slg.svg';
import sls from '../../svg/simple/sls.svg';
import smart from '../../svg/simple/smart.svg';
import sngls from '../../svg/simple/sngls.svg';
import snm from '../../svg/simple/snm.svg';
import snrg from '../../svg/simple/snrg.svg';
import snt from '../../svg/simple/snt.svg';
import srn from '../../svg/simple/srn.svg';
import start from '../../svg/simple/start.svg';
import stash from '../../svg/simple/stash.svg';
import steem from '../../svg/simple/steem.svg';
import storj from '../../svg/simple/storj.svg';
import str from '../../svg/simple/str.svg';
import strat from '../../svg/simple/strat.svg';
import stx from '../../svg/simple/stx.svg';
import swift from '../../svg/simple/swift.svg';
import swt from '../../svg/simple/swt.svg';
import sync from '../../svg/simple/sync.svg';
import synx from '../../svg/simple/synx.svg';
import sys from '../../svg/simple/sys.svg';
import time from '../../svg/simple/time.svg';
import tip from '../../svg/simple/tip.svg';
import tix from '../../svg/simple/tix.svg';
import tkn from '../../svg/simple/tkn.svg';
import trezor from '../../svg/simple/trezor.svg';
import trig from '../../svg/simple/trig.svg';
import trst from '../../svg/simple/trst.svg';
import trx from '../../svg/simple/trx.svg';
import tusd from '../../svg/simple/tusd.svg';
import tx from '../../svg/simple/tx.svg';
import ubq from '../../svg/simple/ubq.svg';
import ukg from '../../svg/simple/ukg.svg';
import und from '../../svg/simple/und.svg';
import unity from '../../svg/simple/unity.svg';
import usd from '../../svg/simple/usd.svg';
import usdc from '../../svg/simple/usdc.svg';
import usdt from '../../svg/simple/usdt.svg';
import ven from '../../svg/simple/ven.svg';
import vera from '../../svg/simple/vera.svg';
import veri from '../../svg/simple/veri.svg';
import vet from '../../svg/simple/vet.svg';
import via from '../../svg/simple/via.svg';
import vib from '../../svg/simple/vib.svg';
import vior from '../../svg/simple/vior.svg';
import viu from '../../svg/simple/viu.svg';
import vnl from '../../svg/simple/vnl.svg';
import vpn from '../../svg/simple/vpn.svg';
import vrc from '../../svg/simple/vrc.svg';
import vtc from '../../svg/simple/vtc.svg';
import vtho from '../../svg/simple/vtho.svg';
import wan from '../../svg/simple/wan.svg';
import waves from '../../svg/simple/waves.svg';
import wax from '../../svg/simple/wax.svg';
import wings from '../../svg/simple/wings.svg';
import xai from '../../svg/simple/xai.svg';
import xaur from '../../svg/simple/xaur.svg';
import xbs from '../../svg/simple/xbs.svg';
import xcp from '../../svg/simple/xcp.svg';
import xdn from '../../svg/simple/xdn.svg';
import xel from '../../svg/simple/xel.svg';
import xem from '../../svg/simple/xem.svg';
import xlm from '../../svg/simple/xlm.svg';
import xmr from '../../svg/simple/xmr.svg';
import xnn from '../../svg/simple/xnn.svg';
import xns from '../../svg/simple/xns.svg';
import xpm from '../../svg/simple/xpm.svg';
import xrp from '../../svg/simple/xrp.svg';
import xtz from '../../svg/simple/xtz.svg';
import xvg from '../../svg/simple/xvg.svg';
import xzc from '../../svg/simple/xzc.svg';
import ybc from '../../svg/simple/ybc.svg';
import yec from '../../svg/simple/yec.svg';
import zec from '../../svg/simple/zec.svg';
import zeit from '../../svg/simple/zeit.svg';
import zen from '../../svg/simple/zen.svg';
import zil from '../../svg/simple/zil.svg';
import zrx from '../../svg/simple/zrx.svg';

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
    name: CoinIconCode;
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
