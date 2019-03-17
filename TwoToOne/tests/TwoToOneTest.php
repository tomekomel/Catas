<?php

namespace Tests;

use TwoToOne\TwoToOne;

/**
 * Class TwoToOneTest
 * @package Tests
 */
class TwoToOneTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @param $actual
     * @param $expected
     */
    private function revTest($actual, $expected)
    {
        $this->assertEquals($expected, $actual);
    }

    public function testBasics()
    {
        $this->revTest(TwoToOne::twoToOne("aretheyhere", "yestheyarehere"), "aehrsty");
        $this->revTest(TwoToOne::twoToOne("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
        $this->revTest(TwoToOne::twoToOne("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
        $this->revTest(TwoToOne::twoToOne("lordsofthefallen", "gamekult"), "adefghklmnorstu");
    }
}
