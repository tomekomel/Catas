<?php

namespace TwoToOne;

/**
 * Class TwoToOne
 * @package TwoToOne
 */
class TwoToOne
{
    /**
     * @param string $first
     * @param string $second
     * @return string
     */
    public static function twoToOne(string $first, string $second)
    {
        $conectedStrings = $first . $second;
        $result = array_unique(str_split($conectedStrings));
        asort($result);

        return implode('', $result);
    }
}
