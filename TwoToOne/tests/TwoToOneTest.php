<?php

namespace Tests;

use TwoToOne\TwoToOne;

class TwoToOneTest extends \PHPUnit\Framework\TestCase
{
    public function testTwoToOneFunction()
    {
        $this->assertEquals('abc', TwoToOne::twoToOne('a', 'bc'));
    }
}
