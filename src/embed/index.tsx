import React, { SVGAttributes, useMemo } from 'react';

import { CoinIconCode } from '../interfaces';
// Icons:
import i1st from '../../svg/default/1st.svg';
import i300 from '../../svg/default/300.svg';
import ada from '../../svg/default/ada.svg';
import adc from '../../svg/default/adc.svg';
import adst from '../../svg/default/adst.svg';
import adt from '../../svg/default/adt.svg';
import adx from '../../svg/default/adx.svg';
import ae from '../../svg/default/ae.svg';
import aeon from '../../svg/default/aeon.svg';
import aidoc from '../../svg/default/aidoc.svg';
import aion from '../../svg/default/aion.svg';
import amis from '../../svg/default/amis.svg';
import amp from '../../svg/default/amp.svg';
import anc from '../../svg/default/anc.svg';
import ankr from '../../svg/default/ankr.svg';
import ant from '../../svg/default/ant.svg';
import apis from '../../svg/default/apis.svg';
import apt from '../../svg/default/apt.svg';
import arc from '../../svg/default/arc.svg';
import arch from '../../svg/default/arch.svg';
import ardr from '../../svg/default/ardr.svg';
import ark from '../../svg/default/ark.svg';
import arn from '../../svg/default/arn.svg';
import ath from '../../svg/default/ath.svg';
import atl from '../../svg/default/atl.svg';
import atom from '../../svg/default/atom.svg';
import aur from '../../svg/default/aur.svg';
import awc from '../../svg/default/awc.svg';
import aya from '../../svg/default/aya.svg';
import banx from '../../svg/default/banx.svg';
import bat from '../../svg/default/bat.svg';
import bay from '../../svg/default/bay.svg';
import bc from '../../svg/default/bc.svg';
import bch from '../../svg/default/bch.svg';
import bchsv from '../../svg/default/bchsv.svg';
import bcn from '../../svg/default/bcn.svg';
import bft from '../../svg/default/bft.svg';
import bnb from '../../svg/default/bnb.svg';
import bnt from '../../svg/default/bnt.svg';
import brd from '../../svg/default/brd.svg';
import brk from '../../svg/default/brk.svg';
import brx from '../../svg/default/brx.svg';
import bsd from '../../svg/default/bsd.svg';
import bsv from '../../svg/default/bsv.svg';
import bta from '../../svg/default/bta.svg';
import btc from '../../svg/default/btc.svg';
import btcd from '../../svg/default/btcd.svg';
import btcp from '../../svg/default/btcp.svg';
import btg from '../../svg/default/btg.svg';
import bth from '../../svg/default/bth.svg';
import btm from '../../svg/default/btm.svg';
import bts from '../../svg/default/bts.svg';
import btu from '../../svg/default/btu.svg';
import busd from '../../svg/default/busd.svg';
import byts from '../../svg/default/byts.svg';
import cfi from '../../svg/default/cfi.svg';
import chz from '../../svg/default/chz.svg';
import clam from '../../svg/default/clam.svg';
import clo from '../../svg/default/clo.svg';
import cloak from '../../svg/default/cloak.svg';
import cnd from '../../svg/default/cnd.svg';
import crm from '../../svg/default/crm.svg';
import crpt from '../../svg/default/crpt.svg';
import cvc from '../../svg/default/cvc.svg';
import dai from '../../svg/default/dai.svg';
import dao from '../../svg/default/dao.svg';
import dash from '../../svg/default/dash.svg';
import dcn from '../../svg/default/dcn.svg';
import dcr from '../../svg/default/dcr.svg';
import dct from '../../svg/default/dct.svg';
import dent from '../../svg/default/dent.svg';
import dgb from '../../svg/default/dgb.svg';
import dgd from '../../svg/default/dgd.svg';
import dgx from '../../svg/default/dgx.svg';
import dkk from '../../svg/default/dkk.svg';
import dmd from '../../svg/default/dmd.svg';
import dnt from '../../svg/default/dnt.svg';
import doge from '../../svg/default/doge.svg';
import dsh from '../../svg/default/dsh.svg';
import ebst from '../../svg/default/ebst.svg';
import edg from '../../svg/default/edg.svg';
import ela from '../../svg/default/ela.svg';
import elf from '../../svg/default/elf.svg';
import ely from '../../svg/default/ely.svg';
import emc from '../../svg/default/emc.svg';
import eng from '../../svg/default/eng.svg';
import enj from '../../svg/default/enj.svg';
import eos from '../../svg/default/eos.svg';
import eosdt from '../../svg/default/eosdt.svg';
import erc from '../../svg/default/erc.svg';
import erd from '../../svg/default/erd.svg';
import etc from '../../svg/default/etc.svg';
import eth from '../../svg/default/eth.svg';
import ethplo from '../../svg/default/ethplo.svg';
import eur from '../../svg/default/eur.svg';
import eurs from '../../svg/default/eurs.svg';
import exp from '../../svg/default/exp.svg';
import fc2 from '../../svg/default/fc2.svg';
import fcn from '../../svg/default/fcn.svg';
import fct from '../../svg/default/fct.svg';
import fio from '../../svg/default/fio.svg';
import flo from '../../svg/default/flo.svg';
import frk from '../../svg/default/frk.svg';
import fsbt from '../../svg/default/fsbt.svg';
import ftc from '../../svg/default/ftc.svg';
import ftm from '../../svg/default/ftm.svg';
import fun from '../../svg/default/fun.svg';
import game from '../../svg/default/game.svg';
import gbg from '../../svg/default/gbg.svg';
import gbp from '../../svg/default/gbp.svg';
import gbyte from '../../svg/default/gbyte.svg';
import gdc from '../../svg/default/gdc.svg';
import gemz from '../../svg/default/gemz.svg';
import gld from '../../svg/default/gld.svg';
import gno from '../../svg/default/gno.svg';
import gnt from '../../svg/default/gnt.svg';
import golos from '../../svg/default/golos.svg';
import grc from '../../svg/default/grc.svg';
import grs from '../../svg/default/grs.svg';
import gup from '../../svg/default/gup.svg';
import gusd from '../../svg/default/gusd.svg';
import heat from '../../svg/default/heat.svg';
import hex from '../../svg/default/hex.svg';
import hmq from '../../svg/default/hmq.svg';
import hot from '../../svg/default/hot.svg';
import hsr from '../../svg/default/hsr.svg';
import icn from '../../svg/default/icn.svg';
import icx from '../../svg/default/icx.svg';
import ifc from '../../svg/default/ifc.svg';
import incnt from '../../svg/default/incnt.svg';
import ioc from '../../svg/default/ioc.svg';
import iost from '../../svg/default/iost.svg';
import iotx from '../../svg/default/iotx.svg';
import iq from '../../svg/default/iq.svg';
import ixt from '../../svg/default/ixt.svg';
import jbs from '../../svg/default/jbs.svg';
import job from '../../svg/default/job.svg';
import joys from '../../svg/default/joys.svg';
import kcs from '../../svg/default/kcs.svg';
import kin from '../../svg/default/kin.svg';
import kmd from '../../svg/default/kmd.svg';
import knc from '../../svg/default/knc.svg';
import kore from '../../svg/default/kore.svg';
import lbc from '../../svg/default/lbc.svg';
import ldoge from '../../svg/default/ldoge.svg';
import ledger from '../../svg/default/ledger.svg';
import link from '../../svg/default/link.svg';
import loki from '../../svg/default/loki.svg';
import loom from '../../svg/default/loom.svg';
import lrc from '../../svg/default/lrc.svg';
import lsk from '../../svg/default/lsk.svg';
import lst from '../../svg/default/lst.svg';
import ltc from '../../svg/default/ltc.svg';
import lto from '../../svg/default/lto.svg';
import lun from '../../svg/default/lun.svg';
import maid from '../../svg/default/maid.svg';
import mana from '../../svg/default/mana.svg';
import mco from '../../svg/default/mco.svg';
import mer from '../../svg/default/mer.svg';
import mint from '../../svg/default/mint.svg';
import miota from '../../svg/default/miota.svg';
import mkr from '../../svg/default/mkr.svg';
import mln from '../../svg/default/mln.svg';
import mona from '../../svg/default/mona.svg';
import mrc from '../../svg/default/mrc.svg';
import msc from '../../svg/default/msc.svg';
import msp from '../../svg/default/msp.svg';
import mtl from '../../svg/default/mtl.svg';
import mtr from '../../svg/default/mtr.svg';
import mue from '../../svg/default/mue.svg';
import myst from '../../svg/default/myst.svg';
import nano from '../../svg/default/nano.svg';
import nas from '../../svg/default/nas.svg';
import nav from '../../svg/default/nav.svg';
import nbt from '../../svg/default/nbt.svg';
import ncash from '../../svg/default/ncash.svg';
import neo from '../../svg/default/neo.svg';
import neos from '../../svg/default/neos.svg';
import neu from '../../svg/default/neu.svg';
import ngc from '../../svg/default/ngc.svg';
import nlg from '../../svg/default/nlg.svg';
import nmc from '../../svg/default/nmc.svg';
import nmr from '../../svg/default/nmr.svg';
import note from '../../svg/default/note.svg';
import now from '../../svg/default/now.svg';
import npxs from '../../svg/default/npxs.svg';
import nut from '../../svg/default/nut.svg';
import nvc from '../../svg/default/nvc.svg';
import nxt from '../../svg/default/nxt.svg';
import oax from '../../svg/default/oax.svg';
import ok from '../../svg/default/ok.svg';
import omg from '../../svg/default/omg.svg';
import omni from '../../svg/default/omni.svg';
import ong from '../../svg/default/ong.svg';
import ont from '../../svg/default/ont.svg';
import opal from '../../svg/default/opal.svg';
import part from '../../svg/default/part.svg';
import pax from '../../svg/default/pax.svg';
import pay from '../../svg/default/pay.svg';
import piggy from '../../svg/default/piggy.svg';
import pink from '../../svg/default/pink.svg';
import pivx from '../../svg/default/pivx.svg';
import plbt from '../../svg/default/plbt.svg';
import plr from '../../svg/default/plr.svg';
import plu from '../../svg/default/plu.svg';
import pot from '../../svg/default/pot.svg';
import powr from '../../svg/default/powr.svg';
import ppc from '../../svg/default/ppc.svg';
import ptoy from '../../svg/default/ptoy.svg';
import pyn from '../../svg/default/pyn.svg';
import qcn from '../../svg/default/qcn.svg';
import qrk from '../../svg/default/qrk.svg';
import qtum from '../../svg/default/qtum.svg';
import r from '../../svg/default/r.svg';
import rads from '../../svg/default/rads.svg';
import rbies from '../../svg/default/rbies.svg';
import rbt from '../../svg/default/rbt.svg';
import rby from '../../svg/default/rby.svg';
import rcn from '../../svg/default/rcn.svg';
import rdd from '../../svg/default/rdd.svg';
import rep from '../../svg/default/rep.svg';
import rhoc from '../../svg/default/rhoc.svg';
import rise from '../../svg/default/rise.svg';
import rlc from '../../svg/default/rlc.svg';
import rvn from '../../svg/default/rvn.svg';
import salt from '../../svg/default/salt.svg';
import sar from '../../svg/default/sar.svg';
import sbtc from '../../svg/default/sbtc.svg';
import sc from '../../svg/default/sc.svg';
import scot from '../../svg/default/scot.svg';
import sdc from '../../svg/default/sdc.svg';
import sia from '../../svg/default/sia.svg';
import sjcx from '../../svg/default/sjcx.svg';
import slg from '../../svg/default/slg.svg';
import sls from '../../svg/default/sls.svg';
import smart from '../../svg/default/smart.svg';
import sngls from '../../svg/default/sngls.svg';
import snm from '../../svg/default/snm.svg';
import snrg from '../../svg/default/snrg.svg';
import snt from '../../svg/default/snt.svg';
import srn from '../../svg/default/srn.svg';
import start from '../../svg/default/start.svg';
import stash from '../../svg/default/stash.svg';
import steem from '../../svg/default/steem.svg';
import storj from '../../svg/default/storj.svg';
import str from '../../svg/default/str.svg';
import strat from '../../svg/default/strat.svg';
import stx from '../../svg/default/stx.svg';
import swift from '../../svg/default/swift.svg';
import swt from '../../svg/default/swt.svg';
import sync from '../../svg/default/sync.svg';
import synx from '../../svg/default/synx.svg';
import sys from '../../svg/default/sys.svg';
import time from '../../svg/default/time.svg';
import tip from '../../svg/default/tip.svg';
import tix from '../../svg/default/tix.svg';
import tkn from '../../svg/default/tkn.svg';
import trezor from '../../svg/default/trezor.svg';
import trig from '../../svg/default/trig.svg';
import trst from '../../svg/default/trst.svg';
import trx from '../../svg/default/trx.svg';
import tusd from '../../svg/default/tusd.svg';
import tx from '../../svg/default/tx.svg';
import ubq from '../../svg/default/ubq.svg';
import ukg from '../../svg/default/ukg.svg';
import und from '../../svg/default/und.svg';
import unity from '../../svg/default/unity.svg';
import usd from '../../svg/default/usd.svg';
import usdc from '../../svg/default/usdc.svg';
import usdt from '../../svg/default/usdt.svg';
import ven from '../../svg/default/ven.svg';
import vera from '../../svg/default/vera.svg';
import veri from '../../svg/default/veri.svg';
import vet from '../../svg/default/vet.svg';
import via from '../../svg/default/via.svg';
import vib from '../../svg/default/vib.svg';
import vior from '../../svg/default/vior.svg';
import viu from '../../svg/default/viu.svg';
import vnl from '../../svg/default/vnl.svg';
import vpn from '../../svg/default/vpn.svg';
import vrc from '../../svg/default/vrc.svg';
import vtc from '../../svg/default/vtc.svg';
import vtho from '../../svg/default/vtho.svg';
import wan from '../../svg/default/wan.svg';
import waves from '../../svg/default/waves.svg';
import wax from '../../svg/default/wax.svg';
import wings from '../../svg/default/wings.svg';
import xai from '../../svg/default/xai.svg';
import xaur from '../../svg/default/xaur.svg';
import xbs from '../../svg/default/xbs.svg';
import xcp from '../../svg/default/xcp.svg';
import xdn from '../../svg/default/xdn.svg';
import xel from '../../svg/default/xel.svg';
import xem from '../../svg/default/xem.svg';
import xlm from '../../svg/default/xlm.svg';
import xmr from '../../svg/default/xmr.svg';
import xnn from '../../svg/default/xnn.svg';
import xns from '../../svg/default/xns.svg';
import xpm from '../../svg/default/xpm.svg';
import xrp from '../../svg/default/xrp.svg';
import xtz from '../../svg/default/xtz.svg';
import xvg from '../../svg/default/xvg.svg';
import xzc from '../../svg/default/xzc.svg';
import ybc from '../../svg/default/ybc.svg';
import yec from '../../svg/default/yec.svg';
import zec from '../../svg/default/zec.svg';
import zeit from '../../svg/default/zeit.svg';
import zen from '../../svg/default/zen.svg';
import zil from '../../svg/default/zil.svg';
import zrx from '../../svg/default/zrx.svg';

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
