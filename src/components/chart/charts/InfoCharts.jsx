import InfoLiquidity from "../liquidity/InfoLiquidity"
import InfoPrice from "../price/InfoPrice"
import InfoVolume from "../volume/InfoVolume"
import InfoAPR from "../apr/InfoAPR"

const InfoCharts = ({ data, rangePrice, rangeVolume, rangeLiquidity, typeChart, currency }) => {
	if (typeChart === "price") {
		return <InfoPrice data={data} range={rangePrice} currency={currency}/>
	} else if (typeChart === "volume") {
		return <InfoVolume data={data} range={rangeVolume}/>
	} else if (typeChart === "apr") {
		return <InfoAPR data={data} range={rangePrice} currency={currency}/>
	}
	 else {
		return <InfoLiquidity data={data} range={rangeLiquidity} />
	}
}

export default InfoCharts
