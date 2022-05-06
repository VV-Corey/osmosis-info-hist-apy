import ButtonsLiquidity from "../liquidity/ButtonsLiquidity"
import ButtonsPrice from "../price/ButtonsPrice"
import ButtonsPriceV1 from "../price/ButtonsPriceV1"
import ButtonsVolume from "../volume/ButtonsVolume"
import ButtonsApr from "../apr/ButtonsAPR"

const ButtonsCharts = ({
	onChangeRangeAPR,
	onChangeRangePrice,
	onChangeRangeVolume,
	onChangeRangeLiquidity,
	rangeAPR,
	rangePrice,
	rangeVolume,
	rangeLiquidity,
	typeChart,
	priceV1
}) => {
	if (typeChart === "price") {
		if(priceV1){

			return <ButtonsPriceV1 onChangeRange={onChangeRangePrice} range={rangePrice} />
		}else{
			return <ButtonsPrice onChangeRange={onChangeRangePrice} range={rangePrice} />

		}
	} else if (typeChart === "volume") {
		return <ButtonsVolume onChangeRange={onChangeRangeVolume} range={rangeVolume} />
	} else if (typeChart === "apr") {
			return <ButtonsApr onChangeRange={onChangeRangePrice} range={rangePrice} />
	} else {
		return <ButtonsLiquidity onChangeRange={onChangeRangeLiquidity} range={rangeLiquidity} />
	}
}

export default ButtonsCharts
