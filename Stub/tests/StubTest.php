<?php

namespace Tests;

use Stub\Stub;

/**
 * Class StubTest
 * @package Tests
 */
class StubTest extends \PHPUnit\Framework\TestCase
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
        $this->revTest(Stub::test(),123);
    }
}
