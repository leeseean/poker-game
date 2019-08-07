class TsUtils {
	public constructor() {
	}
	/**
	 * 删除数组中的某个元素
	 */
	public static Remove<T>(arr: Array<T>, t: T): Array<T> {
		let index = -1;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == t) index = i;

		}
		arr.splice(index, 1)

		return arr;

	}
}