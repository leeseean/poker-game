var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DdzCardsHelper = (function () {
    function DdzCardsHelper() {
    }
    /**
     * 单个
     * @param  {Array<number>} cards 牌
     * @returns boolean
     */
    DdzCardsHelper.IsSingle = function (cards) {
        if (cards.length == 1)
            return true;
        else
            return false;
    };
    /**
     * 是否是对子
     */
    DdzCardsHelper.IsDouble = function (cards) {
        if (cards.length == 2) {
            if (cards[0] == cards[1])
                return true;
        }
        return false;
    };
    /**
     * 是否是顺子
     */
    DdzCardsHelper.IsStraight = function (cards) {
        if (cards.length < 5 || cards.length > 12)
            return false;
        for (var i = 0; i < cards.length - 1; i++) {
            var w = cards[i];
            if (cards[i + 1] - w != 1)
                return false;
            //不能超过A  
            if (w > 12 || cards[i + 1] > 12)
                return false;
        }
        return true;
    };
    /// <summary>  
    /// 是否是双顺子  
    /// </summary>  
    /// <param name="cards"></param>  
    /// <returns></returns>  
    DdzCardsHelper.IsDoubleStraight = function (cards) {
        if (cards.length < 6 || cards.length % 2 != 0)
            return false;
        for (var i = 0; i < cards.length; i += 2) {
            if (cards[i + 1] != cards[i])
                return false;
            if (i < cards.length - 2) {
                if (cards[i + 2] - cards[i] != 1)
                    return false;
                //不能超过A  
                if (cards[i] > 12 || cards[i + 2] > 12)
                    return false;
            }
        }
        return true;
    };
    /// <summary>  
    /// 三不带  
    /// </summary>  
    /// <param name="cards"></param>  
    /// <returns></returns>  
    DdzCardsHelper.IsOnlyThree = function (cards) {
        if (cards.length % 3 != 0)
            return false;
        if (cards[0] != cards[1])
            return false;
        if (cards[1] != cards[2])
            return false;
        if (cards[0] != cards[2])
            return false;
        return true;
    };
    /// <summary>  
    /// 三带一  
    /// </summary>  
    /// <param name="cards"></param>  
    /// <returns></returns>  
    DdzCardsHelper.IsThreeAndOne = function (cards) {
        if (cards.length != 4)
            return false;
        if (cards[0] == cards[1] &&
            cards[1] == cards[2])
            return true;
        else if (cards[1] == cards[2] &&
            cards[2] == cards[3])
            return true;
        return false;
    };
    /// <summary>  
    /// 三代二  
    /// </summary>  
    /// <param name="cards"></param>  
    /// <returns></returns>  
    DdzCardsHelper.IsThreeAndTwo = function (cards) {
        if (cards.length != 5)
            return false;
        if (cards[0] == cards[1] &&
            cards[1] == cards[2]) {
            if (cards[3] == cards[4])
                return true;
        }
        else if (cards[2] == cards[3] &&
            cards[3] == cards[4]) {
            if (cards[0] == cards[1])
                return true;
        }
        return false;
    };
    /// <summary>  
    /// 炸弹  
    /// </summary>  
    /// <param name="cards"></param>  
    /// <returns></returns>  
    DdzCardsHelper.IsBoom = function (cards) {
        if (cards.length != 4)
            return false;
        if (cards[0] != cards[1])
            return false;
        if (cards[1] != cards[2])
            return false;
        if (cards[2] != cards[3])
            return false;
        return true;
    };
    /// <summary>  
    /// 王炸  
    /// </summary>  
    /// <param name="cards"></param>  
    /// <returns></returns>  
    DdzCardsHelper.IsJokerBoom = function (cards) {
        if (cards.length != 2)
            return false;
        if (cards[0] == 53) {
            if (cards[1] == 54)
                return true;
            return false;
        }
        else if (cards[0] == 54) {
            if (cards[1] == 53)
                return true;
            return false;
        }
        return false;
    };
    /**
     * 飞机不带
     */
    DdzCardsHelper.IsTripleStraight = function (cards) {
        if (cards.length < 6 || cards.length % 3 != 0)
            return false;
        for (var i = 0; i < cards.length; i += 3) {
            if (cards[i + 1] != cards[i])
                return false;
            if (cards[i + 2] != cards[i])
                return false;
            if (cards[i + 1] != cards[i + 2])
                return false;
            if (i < cards.length - 3) {
                if (cards[i + 3] - cards[i] != 1)
                    return false;
                //不能超过A  
                if (cards[i] > 12 || cards[i + 3] > 12)
                    return false;
            }
        }
        return true;
    };
    /**
     * 飞机带单
     */
    DdzCardsHelper.isPlaneWithSingle = function (cards) {
        if (!this.HaveFour(cards)) {
            var tempThreeList = new Array();
            for (var i = 0; i < cards.length; i++) {
                var tempInt = 0;
                for (var j = 0; j < cards.length; j++) {
                    if (cards[i] == cards[j]) {
                        tempInt++;
                    }
                }
                if (tempInt == 3) {
                    tempThreeList.push(cards[i]);
                }
            }
            if (tempThreeList.length % 3 != cards.length % 4) {
                return false;
            }
            else {
                if (this.IsTripleStraight(tempThreeList)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return false;
    };
    /**
     * 飞机带双
     */
    DdzCardsHelper.isPlaneWithTwin = function (cards) {
        if (!this.HaveFour(cards)) {
            var tempThreeList = new Array();
            var tempTwoList = new Array();
            for (var i = 0; i < cards.length; i++) {
                var tempInt = 0;
                for (var j = 0; j < cards.length; j++) {
                    if (cards[i] == cards[j]) {
                        tempInt++;
                    }
                }
                if (tempInt == 3) {
                    tempThreeList.push(cards[i]);
                }
                else if (tempInt == 2) {
                    tempTwoList.push(cards[i]);
                }
            }
            if (tempThreeList.length % 3 != cards.length % 5 && tempTwoList.length % 2 != cards.length % 5) {
                return false;
            }
            else {
                if (this.IsTripleStraight(tempThreeList)) {
                    if (this.IsAllDouble(tempTwoList)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return false;
    };
    /**
     * 判断是否是四带二
     **/
    DdzCardsHelper.isSiDaiEr = function (cards) {
        var flag = false;
        if (cards != null && cards.length == 6) {
            for (var i = 0; i < 3; i++) {
                var grade1 = cards[i];
                var grade2 = cards[i + 1];
                var grade3 = cards[i + 2];
                var grade4 = cards[i + 3];
                if (grade2 == grade1 && grade3 == grade1 && grade4 == grade1) {
                    flag = true;
                }
            }
        }
        return flag;
    };
    /**
     * 判断牌里面全是对子
     */
    DdzCardsHelper.IsAllDouble = function (cards) {
        for (var i = 0; i < cards.length % 2; i += 2) {
            if (cards[i] != cards[i + 1]) {
                return false;
            }
        }
        return true;
    };
    /**
     * 判断牌里面是否是拥有4张牌
     */
    DdzCardsHelper.HaveFour = function (cards) {
        for (var i = 0; i < cards.length; i++) {
            var tempInt = 0;
            for (var j = 0; j < cards.length; j++) {
                if (cards[i] == cards[j]) {
                    tempInt++;
                }
            }
            if (tempInt == 4) {
                return true;
            }
        }
        return false;
    };
    /**
     * 判断是否符合出牌规则
     */
    DdzCardsHelper.PopEnable = function (cards) {
        var type = DDZ_POKER_TYPE.DDZ_PASS;
        var isRule = false;
        switch (cards.length) {
            case 1:
                isRule = true;
                type = DDZ_POKER_TYPE.SINGLE;
                break;
            case 2:
                if (this.IsDouble(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.TWIN;
                }
                else if (this.IsJokerBoom(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.KING_BOMB;
                }
                break;
            case 3:
                if (this.IsOnlyThree(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.TRIPLE;
                }
                break;
            case 4:
                if (this.IsBoom(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.FOUR_BOMB;
                }
                else if (this.IsThreeAndOne(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.TRIPLE_WITH_SINGLE;
                }
                break;
            case 5:
                if (this.IsStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
                }
                else if (this.IsThreeAndTwo(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.TRIPLE_WITH_TWIN;
                }
                break;
            case 6:
                if (this.IsStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
                }
                else if (this.IsTripleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_PURE;
                }
                else if (this.IsDoubleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
                }
                else if (this.isSiDaiEr(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.FOUR_WITH_SINGLE; //四带二  
                }
                break;
            case 7:
                if (this.IsStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
                }
                break;
            case 8:
                if (this.IsStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
                }
                else if (this.IsDoubleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
                }
                else if (this.isPlaneWithSingle(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_WITH_SINGLE; //飞机带单  
                }
                break;
            case 9:
                if (this.IsStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
                }
                else if (this.IsTripleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_PURE;
                }
                break;
            case 10:
                if (this.IsStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
                }
                else if (this.IsDoubleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
                }
                else if (this.isPlaneWithTwin(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_WITH_TWIN;
                }
                break;
            case 11:
                if (this.IsStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
                }
                break;
            case 12:
                if (this.IsStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
                }
                else if (this.IsDoubleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
                }
                else if (this.isPlaneWithSingle(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_WITH_SINGLE; //飞机带单  
                }
                else if (this.IsTripleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_PURE;
                }
                break;
            case 13:
                break;
            case 14:
                if (this.IsDoubleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
                }
                break;
            case 15:
                if (this.IsTripleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_PURE;
                }
                else if (this.isPlaneWithTwin(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_WITH_TWIN;
                }
                break;
            case 16:
                if (this.IsDoubleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
                }
                else if (this.isPlaneWithSingle(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_WITH_SINGLE; //飞机带单  
                }
                break;
            case 17:
                break;
            case 18:
                if (this.IsDoubleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
                }
                else if (this.IsTripleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_PURE;
                }
                break;
            case 19:
                break;
            case 20:
                if (this.IsDoubleStraight(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
                }
                else if (this.isPlaneWithSingle(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_WITH_SINGLE; //飞机带单  
                }
                else if (this.isPlaneWithTwin(cards)) {
                    isRule = true;
                    type = DDZ_POKER_TYPE.PLANE_WITH_TWIN;
                }
                break;
            default:
                break;
        }
        return isRule;
    };
    /**
     * 获取牌型
     */
    DdzCardsHelper.GetCardType = function (cards) {
        if (this.IsSingle(cards))
            return DDZ_POKER_TYPE.SINGLE;
        if (this.IsDouble(cards))
            return DDZ_POKER_TYPE.TWIN;
        if (this.IsTripleStraight(cards))
            return DDZ_POKER_TYPE.PLANE_PURE;
        if (this.isPlaneWithTwin(cards))
            return DDZ_POKER_TYPE.PLANE_WITH_TWIN;
        if (this.isSiDaiEr(cards))
            return DDZ_POKER_TYPE.FOUR_WITH_SINGLE;
        if (this.IsThreeAndOne(cards))
            return DDZ_POKER_TYPE.TRIPLE_WITH_SINGLE;
        if (this.IsThreeAndTwo(cards))
            return DDZ_POKER_TYPE.TRIPLE_WITH_TWIN;
        if (this.IsBoom(cards))
            return DDZ_POKER_TYPE.FOUR_BOMB;
        if (this.IsJokerBoom(cards))
            return DDZ_POKER_TYPE.KING_BOMB;
        return DDZ_POKER_TYPE.DDZ_PASS; //不符合规则
    };
    return DdzCardsHelper;
}());
__reflect(DdzCardsHelper.prototype, "DdzCardsHelper");
var DDZ_POKER_TYPE;
(function (DDZ_POKER_TYPE) {
    /**
     * 不符合规则
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["DDZ_PASS"] = 0] = "DDZ_PASS";
    /**
     * 单张
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["SINGLE"] = 1] = "SINGLE";
    /**
     * 对子
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["TWIN"] = 2] = "TWIN";
    /**
     * 三张
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["TRIPLE"] = 3] = "TRIPLE";
    /**
     * 三带单
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["TRIPLE_WITH_SINGLE"] = 4] = "TRIPLE_WITH_SINGLE";
    /**
     * 三带对
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["TRIPLE_WITH_TWIN"] = 5] = "TRIPLE_WITH_TWIN";
    /**
     * 单顺
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["STRAIGHT_SINGLE"] = 6] = "STRAIGHT_SINGLE";
    /**
     * 双顺
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["STRAIGHT_TWIN"] = 7] = "STRAIGHT_TWIN";
    /**
     * 飞机
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["PLANE_PURE"] = 8] = "PLANE_PURE";
    /**
     * 飞机带单
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["PLANE_WITH_SINGLE"] = 9] = "PLANE_WITH_SINGLE";
    /**
     * 飞机带双1
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["PLANE_WITH_TWIN"] = 10] = "PLANE_WITH_TWIN";
    /**
     * 四带单
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["FOUR_WITH_SINGLE"] = 11] = "FOUR_WITH_SINGLE";
    /**
     * 四带对
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["FOUR_WITH_TWIN"] = 12] = "FOUR_WITH_TWIN";
    /**
     * 炸弹
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["FOUR_BOMB"] = 13] = "FOUR_BOMB";
    /**
     * 王炸
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["KING_BOMB"] = 14] = "KING_BOMB";
    /**
     * 默认没有出牌
     */
    DDZ_POKER_TYPE[DDZ_POKER_TYPE["NONE"] = 15] = "NONE";
})(DDZ_POKER_TYPE || (DDZ_POKER_TYPE = {}));
